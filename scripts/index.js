const fs = require('fs')
const { promisify } = require('util')
const puppeteer = require('puppeteer')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const sourceFilePath = process.argv[2]
const readmeFilePath = 'README.md'

const AUTHOR = 'Dean Shi'

const LANG = {
  js: 'JavaScript',
  sh: 'Shell',
  sql: 'SQL',
}

class File {
  constructor(sourceFilePath, readmeFilePath) {
    this.sourceFilePath = sourceFilePath
    this.readmeFilePath = readmeFilePath
  }

  async process() {
    await this.processSourceFile()
    await this.processReadmeFile()
  }

  async processSourceFile() {
    try {
      const sourceFilePath = this.sourceFilePath
      const file = await readFileAsync(sourceFilePath, { encoding: 'utf8' });

      [this.url, ...this.paragraphs] = file.split('\n')
      await this.fetchAll(this.url)
      await this.writeFile(sourceFilePath, this.createSourceFile())

      console.log('[Script] Source file has been updated!')
    } catch (err) {
      console.error('ERROR:', err)
    }
  }

  async processReadmeFile() {
    try {
      const readmeFilePath = this.readmeFilePath
      const file = await readFileAsync(readmeFilePath, { encoding: 'utf8' })
      const line = this.searchLine(file)
      const data = this.insertLine(file, this.getLine(), file.indexOf(line))
      await this.writeFile(readmeFilePath, data)

      console.log('[Script] README has been updated!')
    } catch (err) {
      console.error('ERROR:', err)
    }
  }

  async fetchAll(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url);

    [this.description, this.difficulty, this.title] = await Promise.all([
      this.fetchDescription(page),
      this.fetchDifficulty(page),
      this.fetchTitle(page),
    ])

    browser.close()
  }

  async fetchDescription(page) {
    return await page.evaluate(() => document.querySelector('.question-description').textContent)
  }

  async fetchDifficulty(page) {
    return await page.evaluate(() => document.querySelector('.difficulty-label').textContent)
  }

  async fetchTitle(page) {
    return await page.evaluate(() => document.querySelector('.question-title h3').textContent)
  }

  async writeFile(path, data) {
    try {
      await writeFileAsync(path, data)
    } catch (err) {
      console.error('ERROR:', err)
    }
  }

  getSource() {
    const suffix = '/description'
    return this.url.includes(suffix)
      ? this.url.slice(0, this.url.indexOf(suffix))
      : this.url
  }

  getAuthor() {
    return AUTHOR
  }

  getDate() {
    return new Date().toISOString().split('T')[0]
  }

  getNum() {
    return this.title.split('.')[0].trim()
  }

  getTitle() {
    return this.title.split('.')[1].trim()
  }

  getSourceFilePath() {
    return this.sourceFilePath
  }

  getExtension() {
    return this.sourceFilePath.slice(this.sourceFilePath.lastIndexOf('.') + 1)
  }

  getLanguage() {
    return LANG[this.getExtension()]
  }

  getDifficulty() {
    return this.difficulty.trim()
  }

  getLine() {
    return `|${this.getNum()}|[${this.getTitle()}](${this.getSource()})|[${this.getLanguage()}](${this.getSourceFilePath()})|${this.getDifficulty()}|\n`
  }

  getContent(description) {
    return description
      .replace(/\n\s*\n/g, '\n\n')
      .split('\n')
      .reduce((lines, line) => {
        const lineArr = line.match(/.{1,84}($|\W)/g)

        return lineArr
          ? lines.concat(lineArr.map(l => l.trim()))
          : lines.concat(line)
      }, [''])
  }

  createHeader(source, author, date) {
    const extension = this.getExtension()
    const [
      headerSource,
      headerAuthor,
      headerDate,
    ] = [
      `${extension === 'js' ? '//' : '#'} Source : ${source}`,
      `${extension === 'js' ? '//' : '#'} Author : ${author}`,
      `${extension === 'js' ? '//' : '#'} Date   : ${date}`,
    ]

    return `${headerSource}\n${headerAuthor}\n${headerDate}\n`
  }

  createDescription(description) {
    const extension = this.getExtension()
    const [
      commentHeader,
      commentBlock,
      commentFooter,
    ] = [
      extension === 'js' ? '/'.padEnd(88, '*') : '#'.repeat(82),
      extension === 'js' ? ' * ' : '#  ',
      extension === 'js' ? ' ' + '/'.padStart(88, '*') : '#'.repeat(82),,
    ]

    const commentBody = this.getContent(description)
    return `${commentHeader}${commentBody.join(`\n${commentBlock}`)}\n${commentFooter}`
  }

  createSourceFile() {
    return [
      this.createHeader(this.getSource(), this.getAuthor(), this.getDate()),
      this.createDescription(this.description),
      ...this.paragraphs,
    ].join('\n')
  }

  searchLine(file) {
    const regex = new RegExp(`\\|\\d+.*\\[${this.getLanguage()}\\]`, 'g')
    const lines = file.match(regex)
    const targetNum = this.getNum()

    return lines.find(line => +line.match(/\d+/)[0] < targetNum)
  }

  insertLine(file, line, index) {
    return file.slice(0, index) + line + file.slice(index)
  }
}

new File(sourceFilePath, readmeFilePath).process()

const fs = require('fs')
const { promisify } = require('util')
const puppeteer = require('puppeteer')

const ReadMe = require('./readme.js')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const sourceFilePath = process.argv[2]
const readmeFilePath = 'README.md'

const AUTHOR = require('../package.json').author

class File {
  constructor(sourceFilePath, readmeFilePath) {
    this.sourceFilePath = sourceFilePath
    this.readmeFilePath = readmeFilePath
  }

  async process() {
    await this.processSourceFile()

    await new ReadMe(
      this.sourceFilePath, this.readmeFilePath, this.url
    ).process()
  }

  async processSourceFile() {
    try {
      const sourceFilePath = this.sourceFilePath
      const file = await readFileAsync(sourceFilePath, { encoding: 'utf8' });

      [this.url, ...this.paragraphs] = file.split('\n')
      await this.fetchAll(this.url)
      await writeFileAsync(sourceFilePath, this.createSourceFile())

      console.log('[Script] Source file has been updated!')
    } catch (err) {
      console.error('ERROR:', err)
    }
  }

  async fetchAll(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    await page.waitForSelector('div[class^="description"] > div[class^="content"] > div > p');

    this.description = await this.fetchDescription(page)

    browser.close()
  }

  async fetchDescription(page) {
    return await page.$eval('div[class^="description"] > div[class^="content"]', (e) => e.textContent)
  }

  getSource() {
    const suffixes = ['/description', '/discuss']
    return suffixes.some(suffix => this.url.includes(suffix))
      ? this.url.slice(0, Math.max(this.url.indexOf(suffixes[0]), this.url.indexOf(suffixes[1])))
      : this.url
  }

  getAuthor() {
    return AUTHOR
  }

  getDate() {
    return new Date().toISOString().split('T')[0]
  }

  getExtension() {
    return this.sourceFilePath.slice(this.sourceFilePath.lastIndexOf('.') + 1)
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
}

new File(sourceFilePath, readmeFilePath).process()

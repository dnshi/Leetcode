import fs from 'fs'
import { promisify } from 'util'
import puppeteer from 'puppeteer'
import ReadMe from './readme.js'
import nodePackage from '../package.json'

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const sources = process.argv.slice(2)
const readme = 'README.md'

class File {
  constructor(sourceFilePath, readmeFilePath) {
    this.sourceFilePath = sourceFilePath
    this.readmeFilePath = readmeFilePath
  }

  async process() {
    const success = await this.processSourceFile()

    if (success) {
      await new ReadMe(
        this.sourceFilePath,
        this.readmeFilePath,
        this.url,
      ).process()
    }
  }

  async processSourceFile() {
    try {
      const { sourceFilePath } = this
      const file = await readFileAsync(sourceFilePath, { encoding: 'utf8' })

      ;[this.url, ...this.paragraphs] = file.split('\n')
      if (!this.isValidUrl(this.url)) {
        console.log(`${sourceFilePath} has a comment header already`)
        return false
      }
      await this.fetchAll(this.url)
      await writeFileAsync(sourceFilePath, this.createSourceFile())

      console.log('[Script] Source file has been updated!')
      return true
    } catch (err) {
      console.error('ERROR:', err)
      return false
    }
  }

  async fetchAll(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    await page.waitForSelector(
      'div[class^="description"] > div[class^="content"] > div > p',
    )

    this.description = await this.fetchDescription(page)

    browser.close()
  }

  async fetchDescription(page) {
    return page.$eval(
      'div[class^="description"] > div[class^="content"]',
      (e) => e.textContent,
    )
  }

  getSource() {
    const suffixes = ['/description', '/discuss', '/submissions']
    return suffixes.some((suffix) => this.url.includes(suffix))
      ? this.url.slice(
          0,
          Math.max(...suffixes.map((suffix) => this.url.indexOf(suffix))),
        )
      : this.url.replace(/\/$/, '')
  }

  getAuthor() {
    return nodePackage.author
  }

  getDate() {
    return new Date().toISOString().split('T')[0]
  }

  getExtension() {
    return this.sourceFilePath.slice(this.sourceFilePath.lastIndexOf('.') + 1)
  }

  getDescription() {
    return this.description
  }

  getContent(description) {
    return description
      .replace(/\n\s*\n/g, '\n\n')
      .split('\n')
      .reduce(
        (lines, line) => {
          const lineArr = line.match(/.{1,84}($|\W)/g)

          return lineArr
            ? lines.concat(lineArr.map((l) => l.trim()))
            : lines.concat(line)
        },
        [''],
      )
  }

  createHeader(source, author, date) {
    const extension = this.getExtension()
    const [headerSource, headerAuthor, headerDate] = [
      `${extension === 'js' ? '//' : '#'} Source : ${source}`,
      `${extension === 'js' ? '//' : '#'} Author : ${author}`,
      `${extension === 'js' ? '//' : '#'} Date   : ${date}`,
    ]

    return `${headerSource}\n${headerAuthor}\n${headerDate}\n`
  }

  createDescription(description) {
    const extension = this.getExtension()
    const [commentHeader, commentBlock, commentFooter] = [
      extension === 'js' ? '/'.padEnd(88, '*') : '#'.repeat(82),
      extension === 'js' ? ' * ' : '#  ',
      extension === 'js' ? ` ${'/'.padStart(88, '*')}` : '#'.repeat(82),
    ]

    const commentBody = this.getContent(description)
    return `${commentHeader}${commentBody.join(
      `\n${commentBlock}`,
    )}\n${commentFooter}`
  }

  createSourceFile() {
    return [
      this.createHeader(this.getSource(), this.getAuthor(), this.getDate()),
      this.createDescription(this.getDescription()),
      ...this.paragraphs,
    ].join('\n')
  }

  isValidUrl(url) {
    return url.startsWith('http')
  }
}

if (sources.length > 0) {
  sources.map((sourceFilePath) => new File(sourceFilePath, readme).process())
}

import https from 'https'
import fs from 'fs'
import { promisify } from 'util'

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const URL = 'https://leetcode.com/api/problems/all/'
const LANG = {
  js: 'JavaScript',
  sh: 'Shell',
  sql: 'SQL',
}

const LEVEL = {
  1: 'Easy',
  2: 'Medium',
  3: 'Hard',
}

export default class ReadMe {
  constructor(sourceFilePath, readmeFilePath, url) {
    this.sourceFilePath = sourceFilePath
    this.readmeFilePath = readmeFilePath
    this.url = url
  }

  async process() {
    const { stat_status_pairs: data } = await this.fetch(URL)

    const slug = this.getSource().split('/').pop()
    const questionInfo = data.find(
      ({ stat }) => stat.question__title_slug === slug,
    )
    const { frontend_question_id, question__title } = questionInfo.stat
    const { level } = questionInfo.difficulty

    this.title = `${frontend_question_id}.${question__title}`
    this.difficulty = LEVEL[level]

    await this.processReadmeFile()
  }

  async processReadmeFile() {
    try {
      const { readmeFilePath } = this
      const file = await readFileAsync(readmeFilePath, { encoding: 'utf8' })
      const line = this.searchLine(file)
      const data = this.insertLine(file, this.getLine(), file.indexOf(line))
      await writeFileAsync(readmeFilePath, data)

      console.log('[Script] README has been updated!')
    } catch (err) {
      console.error('ERROR:', err)
    }
  }

  searchLine(file) {
    const regex = new RegExp(`\\|\\d+.*\\[${this.getLanguage()}\\]`, 'g')
    const lines = file.match(regex)
    const targetNum = this.getNum()

    return lines.find((line) => +line.match(/\d+/)[0] < targetNum)
  }

  insertLine(file, line, index) {
    return file.slice(0, index) + line + file.slice(index)
  }

  getLine() {
    const num = this.getNum()
    const title = this.getTitle()
    const source = this.getSource()
    const language = this.getLanguage()
    const sourceFilePath = this.getSourceFilePath()
    const difficulty = this.getDifficulty()

    return `|${num}|[${title}](${source})|[${language}](${sourceFilePath})|${difficulty}|\n`
  }

  getNum() {
    return this.title.split('.')[0].trim()
  }

  getTitle() {
    return this.title.split('.')[1].trim()
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

  getLanguage() {
    return LANG[this.getExtension()]
  }

  getExtension() {
    return this.sourceFilePath.slice(this.sourceFilePath.lastIndexOf('.') + 1)
  }

  getSourceFilePath() {
    return this.sourceFilePath
  }

  getDifficulty() {
    return this.difficulty.trim()
  }

  fetch(url) {
    return new Promise((resolve, reject) => {
      https
        .get(url, (resp) => {
          let data = ''

          resp.on('data', (chunk) => {
            data += chunk
          })

          resp.on('end', () => {
            resolve(JSON.parse(data))
          })
        })
        .on('error', (err) => {
          reject(err.message)
        })
    })
  }
}

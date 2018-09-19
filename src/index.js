'use strict'

const chalk = require('chalk')
const commander = require('commander')
const ora = require('ora')

const util = require('util')

const exec = util.promisify(require('child_process').exec)
const fs = require('fs')
const path = require('path')

const packageJson = require('../package.json')
const template = require('./template')

console.log(chalk.cyan('JS Zombies presents - create-zombie-lib\n'))

let projectName
let templateName = 'react-component-lib-template'

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name
  })
  .option('-t, --template [name]', 'Use specific template type')
  .parse(process.argv)

templateName = program.template || templateName

if (!projectName) {
  console.error('Please specify the project directory:')
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  )
  console.log()
  console.log('For example:')
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('my-react-component-lib')}`
  )
  console.log()
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  )
  process.exit(1)
}

function resolveTemplate () {
  return template.getTemplatePath(templateName)
}

function copyFiles (templatePath, projectName) {
  return exec(`cp -a ${templatePath} ${projectName}`)
}

function npmInstall (projectName) {
  return exec(`cd ${projectName}; yarn;`)
}

function isDirectoryExists (projectName) {
  return fs.existsSync(projectName)
}

async function spinnerProcess (processPromise, startText, endText) {
  const spinner = ora(startText).start()
  await processPromise
  return spinner.succeed(endText)
}

async function createLibrary ({ __dirname, projectName }) {
  if (isDirectoryExists(projectName)) {
    console.error(chalk.red(`${projectName} directory already exists`))
    return
  }

  const templateRelativePath = resolveTemplate()
  if (!templateRelativePath) {
    console.error(chalk.red(`No such template - ${program.template}`))
    return
  }

  console.log(`Create lib using ${chalk.green(templateName)}\n`)

  const templatePath = path.resolve(__dirname, templateRelativePath)
  await spinnerProcess(
    copyFiles(templatePath, projectName),
    'Copying files...',
    'Done.'
  )

  await spinnerProcess(
    npmInstall(projectName),
    'Installing dependencies...',
    'Done.'
  )
}

module.exports = function run (__dirname) {
  createLibrary({ __dirname, projectName })
}

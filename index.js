#!/usr/bin/env node

const chalk = require('chalk');
const commander = require('commander');

const execSync = require('child_process').execSync;
const packageJson = require('./package.json');
const ora = require('ora');

const welcomeMessage = 'JS Zombies presents...';

function printRainbowMessage(message) {
  const colors = ['red', 'redBright', 'yellow', 'green', 'blueBright', 'blue'];

  const colorfullMessage = message.split('').map((letter, index) => {
    let colorIndex = index;
    if (colorIndex > colors.length - 1) {
      colorIndex =
        colorIndex - Math.floor(colorIndex / colors.length) * colors.length;
    }
    const color = colors[colorIndex];
    const printColor = chalk[color];

    return printColor(letter);
  });

  console.log(colorfullMessage.join(''));
}

printRainbowMessage(welcomeMessage);

let projectName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name;
  })
  .parse(process.argv);

if (typeof projectName === 'undefined') {
  console.error('Please specify the project directory:');
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  );
  console.log();
  console.log('For example:');
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('my-react-component-lib')}`
  );
  console.log();
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  );
  process.exit(1);
}

function copyFiles(projectName) {
  execSync(`cp -a ./templates/react-component-lib-template/ ${projectName}`);
}

function createReactComponentLib(projectName) {
  const spinner = ora('Copying files...').start();
  setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Copying more files...';
  }, 1000);
  copyFiles(projectName);
  spinner.stop();
}

createReactComponentLib(projectName);

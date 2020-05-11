const fs = require('fs');
const { program } = require('commander');

// TODO: auto convert title to lower case splited by '-'
program
  .option('-d, --debug', 'output extra debugging')
  .option('-o, --output <outputDir>', 'specific the output dir')
  .option('-t, --title <titleName>', 'specific the title in markdown description')
  .option('-n, --name <questionName>', 'tell me name of the question');

program.parse(process.argv);
let { output, debug, name, title = '' } = program;
const logs = (...args) => {
  if (debug) {
    console.log(...args);
  }
};

const fileList = ['index.js', 'index.md', 'index.spec.js'];
const prefix = './template';
const encoding = 'utf-8';
if (output && name) {
  output = `./src/${output}`;
  logs('created in', output);
  fs.mkdirSync(output, { recursive: true });
  fileList.forEach(f => {
    const outputDirWithNoTrailingSlash = `${output.replace(/\/$/, '')}`;
    const data = fs.readFileSync(`${prefix}/${f}`, { encoding });
    const newData = data
      .replace(/demo/g, name)
      .replace(/Q_DESC_TITLE/g, title)
      .replace('YYYY-MM-DD', YYYYMMDD());
    fs.writeFileSync(`${outputDirWithNoTrailingSlash}/${f}`, newData, { encoding });
  });
}

function YYYYMMDD() {
  const zeroIfLess10 = num => num >= 10 ? num : `0${num}`;
  const currDate = new Date();
  const year = currDate.getFullYear();
  const month = zeroIfLess10(currDate.getMonth() + 1);
  const date = zeroIfLess10(currDate.getDate());
  return `${year}-${month}-${date}`;
};

const fs = require("fs");
const { program } = require("commander");
const fetchUtils = require("./fetch-queston");

const fileList = ["index.js", "index.md", "index.spec.js"];
const prefix = "./template";
const encoding = "utf-8";

program
  .option("-o, --output <outputDir>", "specific the output dir")
  .option(
    "-t, --title <titleName>",
    "specific the title in markdown description"
  )
  .option("-auto, --automatic", "will automatically download")
  .option("-n, --name <questionName>", "tell me name of the question");

const YYYYMMDD = () => {
  const zeroIfLess10 = num => (num >= 10 ? num : `0${num}`);
  const currDate = new Date();
  const year = currDate.getFullYear();
  const month = zeroIfLess10(currDate.getMonth() + 1);
  const date = zeroIfLess10(currDate.getDate());
  return `${year}-${month}-${date}`;
};

const exitProcess = (code = 1) => process.exit(code);

const writeTmpl = (output, name, title, qId, presetDataObj) => {
  if (output) {
    output = `./src/${output}`;
    console.log("writting template in", output);
    fs.mkdirSync(output, { recursive: true });
    fileList.forEach(f => {
      const outputDirWithNoTrailingSlash = `${output.replace(/\/$/, "")}`;
      const data = fs.readFileSync(`${prefix}/${f}`, { encoding });
      let newData;
      if (presetDataObj[f]) {
        if (f === fileList[1]) {
          newData =
            data.slice(0, data.indexOf("##### Description:")) +
            presetDataObj[f] + '\n' +
            data.slice(data.indexOf('### Process:'))
        } else {
          newData = presetDataObj[f];
        }
      } else {
        newData = data;
      }

      fs.writeFileSync(
        `${outputDirWithNoTrailingSlash}/${f}`,
        (newData || data)
          .replace(/demo/g, name)
          .replace(/Q_DESC_TITLE/g, title)
          .replace(/Q_ID/g, qId)
          .replace("YYYY-MM-DD", YYYYMMDD()),
        { encoding }
      );
    });
  }
};

const getCodeFromTemplateList = (tmplArray, lang = "javascript") => {
  let arr;
  try {
    arr = JSON.parse(tmplArray || "[]");
  } catch {
    return null;
  }

  if (arr && arr.length) {
    let result = null;
    arr.some(t => {
      if (t.value === lang) {
        result = {
          code: t.defaultCode,
          funcName: t.defaultCode.match(/var ([a-zA-Z][a-zA-Z0-9]+) =/)[1]
        };
        return true;
      }

      return false;
    });

    return result;
  }

  return null;
};

const htmlToMarkdown = htmlContent => {
  return htmlContent;
};

(async () => {
  program.parse(process.argv);
  let { output, name = "", title = "", automatic = false } = program;
  let result = null;
  if (automatic) {
    const fetchResp = await fetchUtils.fetchQuestion(
      title
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace("'", "")
    );
    const fetchRespJson = await fetchResp.json();
    if (fetchRespJson.errors && Array.isArray(fetchRespJson.errors)) {
      fetchRespJson.errors.map(e => {
        console.error(e.message);
      });
      exitProcess(1);
      return;
    }

    const data = (fetchRespJson.data && fetchRespJson.data.question) || {};
    result = {
      content: data.content,
      title: data.questionTitle,
      codeTemplate: data.codeDefinition,
      qId: data.questionId,
    };
  } else if (!name || name.match(/^[a-zA-Z][0-9A-Za-z]+/) === null) {
    console.error("valid Name should be supplied when -auto flag is absent");
    exitProcess(1);
    return;
  }

  const { funcName, code } =
    getCodeFromTemplateList(result && result.codeTemplate) || {};
  writeTmpl(output, funcName || name, title, result && result.qId,{
    [fileList[0]]: code,
    [fileList[1]]: htmlToMarkdown(result && result.content)
  });
})();

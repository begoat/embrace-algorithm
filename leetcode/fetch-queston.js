const fetch = require('node-fetch');

const fetchQuestion = async function(title) {
  return fetch("https://leetcode.com/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en,zh;q=0.9,en-US;q=0.8,zh-CN;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `{\"operationName\":\"GetQuestion\",\"variables\":{\"titleSlug\":\"${title}\"},\"query\":\"query GetQuestion($titleSlug: String!) {\\n  question(titleSlug: $titleSlug) {\\n    questionId\\n    sessionId\\n    questionTitle\\n    categoryTitle\\n    submitUrl\\n    interpretUrl\\n    codeDefinition\\n    sampleTestCase\\n    enableTestMode\\n    metaData\\n    langToValidPlayground\\n    enableRunCode\\n    enableSubmit\\n    judgerAvailable\\n    infoVerified\\n    envInfo\\n    content\\n    translatedContent\\n    urlManager\\n    hints\\n    solution {\\n      title\\n      content\\n      canSeeDetail\\n      paidOnly\\n      __typename\\n    }\\n    __typename\\n  }\\n  isCurrentUserAuthenticated\\n}\\n\"}`,
    "method": "POST",
    "mode": "cors"
  });
};

module.exports = {
  fetchQuestion: fetchQuestion,
};

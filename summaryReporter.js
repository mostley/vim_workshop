const chalk = require("chalk");

const indentation = "  ";

function printAncestorResults(name, ancestorResults, depth = 0) {
  const indent = new Array(depth).fill(indentation).join("");
  if (name) {
    console.log(indent + chalk.bold(name));
  }

  for (const result of ancestorResults.results ?? []) {
    // console.log(`${indent}${indentation}${result.title} - ${result.status}`);
    console.log(`${indent}${indentation}${result.title}`);
  }

  for (const key of Object.keys(ancestorResults)) {
    if (key === "results") {
      continue;
    }

    printAncestorResults(key, ancestorResults[key], depth + 1);
  }
}

class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(_, results) {
    console.log("\nResults:\n");

    const aggregatedResults = {};

    for (const result of results.testResults) {
      for (const testResult of result.testResults) {
        let ancestorResults = aggregatedResults;
        for (const ancestor of testResult.ancestorTitles) {
          if (!ancestorResults[ancestor]) {
            ancestorResults[ancestor] = { results: [] };
          }

          ancestorResults = ancestorResults[ancestor];
        }

        let status = testResult.status;
        let title = testResult.title;
        if (status === "failed") {
          status = chalk.red("✘");
          title = chalk.bgRed(title);
        } else if (status === "passed") {
          status = chalk.green("✔");
          title = chalk.bgGreen(title);
        } else {
          status = chalk.yellow("-");
          title = chalk.bgYellow(title);
        }

        ancestorResults.results.push({
          status,
          title,
        });
      }
    }

    printAncestorResults(undefined, aggregatedResults);
  }
}

module.exports = MyCustomReporter;

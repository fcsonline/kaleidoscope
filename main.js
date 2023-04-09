import * as dotenv from "dotenv";
import { ChatGPTAPI } from "chatgpt";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import MarkdownIt from "markdown-it";

dotenv.config();

const componentsFolder = "components";

const stripTitles = (data) => {
  return data
    .split(`\n`)
    .filter((line) => !line.startsWith("#"))
    .join(`\n`);
};

const chat = async (prompt) => {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    completionParams: {
      temperature: 0.3,
      top_p: 0.8,
    },
  });

  const res = await api.sendMessage(prompt);

  return res.text;
};

const isShouldGenerate = (requirementsFile, componentFile) => {
  if (!fs.existsSync(componentFile)) return true;

  const requirementsStats = fs.statSync(requirementsFile);
  const componentStats = fs.statSync(componentFile);

  if (requirementsStats.mtime.getTime() !== componentStats.mtime.getTime())
    return true;

  return false;
};

async function main() {
  // Read requirements file
  const requirements = fs.readFileSync(
    path.join(".", componentsFolder, "requirements.md"),
    "utf8"
  );

  const files = fs.readdirSync(path.join(".", componentsFolder));

  for (const file of files) {
    if (!fs.lstatSync(path.join(".", componentsFolder, file)).isDirectory())
      continue;

    const requirementsFile = path.join(".", componentsFolder, file, "index.md");
    const componentFile = path.join(".", componentsFolder, file, "index.tsx");

    console.log(`Checking changes in ${chalk.blue(file)} component...`);

    if (!isShouldGenerate(requirementsFile, componentFile)) {
      console.log(
        `${chalk.blue(file)} component has not changed. ${chalk.yellow(
          "Skipping"
        )}`
      );

      continue;
    }

    console.log(`Generating ${chalk.blue(file)} component...`);
    const component = fs.readFileSync(requirementsFile, "utf8");

    const prompt = [
      stripTitles(requirements),
      `Create a component called '${file}' with these requirements.`,
      stripTitles(component),
      "Output only code.",
    ].join(`\n`);

    const content = await chat(prompt);

    const md = new MarkdownIt({
      highlight: function (source, lang) {
        const fileContent = `// NOTE: file autogenerated by AI. Do not edit manually\n\n${source}`;

        fs.writeFileSync(componentFile, fileContent);

        const time = fs.statSync(requirementsFile).mtime;

        fs.utimesSync(componentFile, time, time);

        console.log(`${chalk.blue(file)} component generated succesfully`);
      },
    });

    md.render(content);
  }
}

main();

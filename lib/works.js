import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import moment from "moment";

const worksDirectory = path.join(process.cwd(), "/content/works");

export const getSortedWorks = () => {
  const fileNames = fs.readdirSync(worksDirectory);

  const allWorksData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(worksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allWorksData.sort((a, b) => {
    const format = "DD-MM-YYYY";
    const dateA = moment(a.date, format);
    const dateB = moment(b.date, format);

    if (dateA.isBefore(dateB)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllWorkIds = () => {
  const sortedWorks = getSortedWorks();
  const worksById = {};

  sortedWorks.forEach((work) => {
    if (!worksById[work.id]) {
      worksById[work.id] = [];
    }

    worksById[work.id].push(work);
  });

  return worksById;
};

export const getWorkData = async (id) => {
  const fullPath = path.join(worksDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};

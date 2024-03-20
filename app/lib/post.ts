import { join } from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "app/blog/posts");
export async function getPostData(id) {
  const fullPath = join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    title: data.title,
    date: data.date,
    skills: data.skills,
    cover_image: data.cover_image,
    viewed: data.viewed,
    secret: data.secret,
    content,
  };
}

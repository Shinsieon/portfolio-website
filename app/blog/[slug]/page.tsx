import fs from "fs";
import { join } from "path";

import matter from "gray-matter";
import PostSection from "../../components/PostSection";

const postsDirectory = join(process.cwd(), "app/blog/posts");

export default async function Page({ params }) {
  const { title, date, content } = await getPostData(params.slug);
  return <PostSection title={title} date={date} content={content} />;
}
export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((file: any) => ({
    slug: file.slug,
  }));
}

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
    content,
  };
}

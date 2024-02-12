import fs from "fs";
import { join } from "path";

import PostSection from "../../components/PostSection";
import { getPostData } from "../../lib/post";

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

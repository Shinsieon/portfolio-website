import fs from "fs";
import { join } from "path";

import PostSection from "../../components/PostSection";
import { getPostData } from "../../lib/post";
import prisma from "../../lib/prisma";

const postsDirectory = join(process.cwd(), "app/blog/posts");

export default async function Page({ params }) {
  const { title, date, content } = await getPostData(params.slug);
  return <PostSection title={title} date={date} content={content} />;
}
export async function generateStaticParams() {
  const feed = await prisma.post.findMany({
    where: { published: true },
  });
  console.log(feed);
  return {
    props: { feed },
    revalidate: 10,
  };
  // const fileNames = fs.readdirSync(postsDirectory);
  // return fileNames.map((file: any) => ({
  //   slug: file.slug,
  // }));
}

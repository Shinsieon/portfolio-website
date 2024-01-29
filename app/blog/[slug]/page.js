import fs from "fs";
import { join } from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import matter from "gray-matter";

import Image from "next/image";

const postsDirectory = join(process.cwd(), "app/blog/posts");

export default async function Page({ params }) {
  const { title, date, content } = await getPostData(params.slug);
  return (
    <article className="flex min-h-screen flex-col px-12  ">
      <div className="container mx-auto px-12 py-12 text-white  font-ios">
        <div className="w-full h-10 my-10">
          <h2 className="text-4xl font-extrabold dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-5">
            {date}
          </p>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
          components={{
            h1(props) {
              return (
                <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  {props.children}
                </h1>
              );
            },
            blockquote({ children, ...props }) {
              return (
                <blockquote className="bg-blue-gray-300" {...props}>
                  {children}
                </blockquote>
              );
            },
            em(props) {
              return (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-sans px-1 rounded">
                  {props.children}
                </button>
              );
            },
            p(props) {
              return (
                <p className="mb-3 text-gray-100 dark:text-warmGray-50">
                  {props.children}
                </p>
              );
            },

            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  style={materialDark}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...props}>{children}</code>
              );
            },
            img: (image) => (
              <Image
                src={image.src || ""}
                alt={image.alt || ""}
                width={500}
                height={300}
              />
            ),
            a: (props) => {
              return (
                <a
                  href={props.href}
                  target="_blank"
                  className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline"
                >
                  {props.children}
                </a>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((file) => ({
    slug: file.slug,
  }));
}

export async function getPostData(id) {
  const fullPath = join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content, desc } = matter(fileContents);
  return {
    title: data.title,
    date: data.date,
    skills: data.skills,
    cover_image: data.cover_image,
    viewed: data.viewed,
    content,
  };
}

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
    <main className="flex flex-col ">
      <div className="container mx-auto px-10 py-12 font-ios">
        <div className="w-full h-10 my-20">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {title}
            <span class="text-xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {date}
            </span>
          </h1>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
          components={{
            h1(props) {
              return (
                <h2 class="text-4xl font-extrabold dark:text-white mb-4">
                  {props.children}
                </h2>
              );
            },
            blockquote(props) {
              return (
                <blockquote class="text-xl italic font-semibold text-left text-gray-900 dark:text-white">
                  <p>{props.children}</p>
                </blockquote>
              );
            },
            em(props) {
              return (
                <span class="mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                  <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                    {props.children}
                  </span>
                </span>
              );
            },
            p(props) {
              return (
                <p class="mb-3 text-gray-500 dark:text-gray-400">
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
    </main>
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

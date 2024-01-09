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
  console.log(params);
  const { title, date, content } = await getPostData(params.slug);
  return (
    <article className="flex min-h-screen flex-col bg-[#121212] px-12  ">
      <div className="container mx-auto px-12 py-12 text-white  font-ios">
        <h2 className="text-4xl font-extrabold dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-5">
          {date}
        </p>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
          components={{
            h1(props) {
              return (
                <h1 className="bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mb-5 inline-block">
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
  console.log(desc);
  return {
    title: data.title,
    date: data.date,
    content,
  };
}

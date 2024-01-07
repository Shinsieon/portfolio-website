import fs from "fs";
import { join } from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const postsDirectory = join(process.cwd(), "app/blog/posts");

export default async function Page({ params }) {
  const postData = await getPostData(params.slug);
  return (
    <article className="flex min-h-screen flex-col bg-[#121212] px-12  ">
      <div className="container mx-auto px-12 py-12 text-white  font-ios">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
          components={{
            h1(props) {
              return <h1 className="text-2xl py-2">{props.children}</h1>;
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
              return <p className="font-sans">{props.children}</p>;
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
                className={classes.markdown_container_img}
              />
            ),
          }}
        >
          {postData}
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

  return fileContents;
}

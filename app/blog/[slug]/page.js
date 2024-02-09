import fs from "fs";
import { join } from "path";

import matter from "gray-matter";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const postsDirectory = join(process.cwd(), "app/blog/posts");

const ZoomedInImage = () => {
  return (
    <div
      id="popup-modal"
      tabindex="-1"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-4 md:p-5 text-center">
            <svg
              class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function Page({ params }) {
  const { title, date, content } = await getPostData(params.slug);
  return (
    <section>
      <div className="w-full h-10 mb-20">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
          <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {date}
          </span>
        </h1>
      </div>
      <ZoomedInImage />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
        components={{
          h1(props) {
            return (
              <h2 className="text-4xl font-extrabold dark:text-white my-7">
                {props.children}
              </h2>
            );
          },

          blockquote(props) {
            return (
              <blockquote className="text-xl italic font-semibold text-left text-gray-900 dark:text-white">
                <p>{props.children}</p>
              </blockquote>
            );
          },
          em(props) {
            return (
              <span className="mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
                  {props.children}
                </span>
              </span>
            );
          },
          p(props) {
            return (
              <p className="mb-3 text-gray-500 dark:text-gray-300">
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
                className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded my-5"
                showLineNumbers={true}
                useInlineStyles={true}
                {...props}
                style={dracula}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            );
          },
          img: (image) => {
            return (
              <Image
                src={image.src || ""}
                alt={image.alt || ""}
                width={400}
                height={300}
                className="rounded-lg shadow-sm dark:shadow-gray-800 hover:scale-125"
              />
            );
          },
          a: (props) => {
            return (
              <a
                href={props.href}
                target="_blank"
                className="inline-flex items-center justify-center p-2 my-4 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <ArrowRightCircleIcon width={50} />
                <span className="w-full">{props.children}</span>
              </a>
            );
          },

          li: (props) => {
            return (
              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 my-4">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>{props.children}</span>
                </li>
              </ul>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
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

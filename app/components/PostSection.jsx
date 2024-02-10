"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const ZoomedInImage = ({ clickHandler, imageUrl }) => {
  return (
    <div
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      onClick={clickHandler}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={imageUrl} alt={""} width={1000} height={800} />
      </div>
    </div>
  );
};
const PostSection = ({ title, date, content }) => {
  const [zoomIn, setZoomIn] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  function onImgClick(_imgUrl) {
    setImgUrl(_imgUrl);
    setZoomIn(!zoomIn);
    console.log(zoomIn);
  }
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
      {zoomIn ? (
        <ZoomedInImage clickHandler={onImgClick} imageUrl={imgUrl} />
      ) : (
        ""
      )}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
        components={{
          h1(props) {
            return (
              <h2 className="text-4xl font-extrabold dark:text-white my-5">
                {props.children}
              </h2>
            );
          },
          h2(props) {
            return (
              <h2 className="text-3xl font-extrabold dark:text-white my-5">
                {props.children}
              </h2>
            );
          },
          h3(props) {
            return (
              <h3 className="text-2xl font-extrabold dark:text-white my-5">
                {props.children}
              </h3>
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
                <span className="underline underline-offset-3 decoration-[7px] decoration-blue-400 dark:decoration-blue-600">
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
                className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
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
                width={500}
                height={400}
                onClick={() => {
                  onImgClick(image.src);
                }}
                className="rounded-lg shadow-sm dark:shadow-gray-800 my-7"
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
};

export default PostSection;

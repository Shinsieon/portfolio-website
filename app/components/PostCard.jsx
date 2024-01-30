import React, { useEffect, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const PostCard = () => {
  const [postArr, setPostArr] = useState([]);
  useEffect(() => {
    fetch("/api/blogPost", options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPostArr(data);
      });
  }, []);
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Recent Blog Posts
        </h5>

        <a
          href="/blog"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <p className="text-sm text-gray-500 truncate dark:text-gray-400 text-wrap text-left">
          The place where I note what I&apos;ve learned and the things I&apos;ve
          been up to.
        </p>
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {postArr.map(({ fileInfo, fileName }, index) => {
            if (index > 5) return;
            const { title, date, skills, cover_image, viewed, content } =
              fileInfo;
            return (
              <li className="py-3 sm:py-4" key={index}>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={`/images/${cover_image}`}
                      alt="blog image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {skills}
                    </p>
                  </div>

                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white gap-2">
                    <EyeIcon className="w-5 h-5" />

                    {viewed}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PostCard;

"use client";
import React, { useState, useEffect } from "react";
import { Typography, Avatar } from "@material-tailwind/react";
import Link from "next/link";
import Skeleton from "./Skeleton";

const TABLE_HEAD = ["Title", "Skills", "Created", "Viewed"];
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const BlogTableSection = () => {
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
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th key={index} className="cursor-pointer px-6 py-3 text-left">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {postArr ? (
            postArr.map(({ fileInfo, fileName }, index) => {
              const { title, date, skills, cover_image, viewed, content } =
                fileInfo;
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={`/images/${cover_image}`}
                        alt={name}
                        size="sm"
                      />
                      <div className="flex flex-col">
                        <Link
                          variant="small"
                          className="font-normal"
                          href={`/blog/${fileName.replace(".md", "")}`}
                        >
                          {title}
                        </Link>
                        <Typography
                          variant="small"
                          className="font-normal opacity-70"
                        >
                          {""}
                        </Typography>
                      </div>
                    </div>
                  </th>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <Typography variant="small" className="font-normal">
                        {skills}
                      </Typography>
                    </div>
                  </td>

                  <td className="p-4">
                    <Typography variant="small" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      className="font-normal text-center"
                    >
                      {viewed}
                    </Typography>
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="py-3 sm:py-4">
              <Skeleton />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTableSection;

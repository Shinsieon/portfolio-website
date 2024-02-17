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
  }, postArr);
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th key={index} className="px-6 py-3 text-left">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {postArr.length > 0 ? (
            postArr.map(({ fileInfo, fileName, viewed }, index) => {
              const { title, date, skills, cover_image, content } = fileInfo;
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={`/images/${cover_image}`}
                        alt={fileName || ""}
                        placeholder={""}
                        size="sm"
                      />
                      <div className="flex flex-col ">
                        <Link
                          className="font-normal text-base"
                          href={`/blog/${fileName.replace(".md", "")}`}
                        >
                          {title}
                        </Link>
                        <Typography
                          placeholder={""}
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
                      <Typography
                        placeholder={""}
                        variant="small"
                        className="font-normal"
                      >
                        {skills}
                      </Typography>
                    </div>
                  </td>

                  <td className="p-4">
                    <Typography
                      placeholder={""}
                      variant="small"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      placeholder={""}
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
            <tr>
              <td colSpan={4}>
                <Skeleton />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTableSection;

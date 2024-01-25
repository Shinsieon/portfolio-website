"use client";
import React, { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
} from "@material-tailwind/react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Algorithms",
    value: "Algorithms",
  },
  {
    label: "Javascript",
    value: "Javascript",
  },
  {
    label: "Python",
    value: "Python",
  },
];

const TABLE_HEAD = ["Title", "Skills", "Created", "View"];
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
    <Card className="text-white mt-5" color="transparent" variant="gradient">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded py-2 border-white"
        color="transparent"
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              color="white"
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5 text-white" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0 scrollbar-hide whitespace-nowrap">
        <table className="mt-4 w-full min-w-max table-auto text-left ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-white p-4 transition-colors"
                >
                  <Typography
                    variant="small"
                    color="white"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {postArr.length > 0 &&
              postArr.map(({ fileInfo, fileName }, index) => {
                const { title, date, skills, cover_image, viewed, content } =
                  fileInfo;
                const isLast = index === postArr.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={`/images/${cover_image}`}
                          alt={name}
                          size="sm"
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="white"
                            className="font-normal"
                          >
                            {title}
                          </Typography>
                          <Typography
                            variant="small"
                            color="white"
                            className="font-normal opacity-70"
                          >
                            {""}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal"
                        >
                          {skills}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>{viewed}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="white" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" color="cyan">
            Previous
          </Button>
          <Button variant="outlined" size="sm" color="cyan">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogTableSection;

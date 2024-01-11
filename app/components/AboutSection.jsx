"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import VideoPlayer from "./VideoPlayer";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    component: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Mysql</li>
        <li>Redis</li>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>Linux</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    component: (
      <ul className="list-disc pl-2">
        <li>경희대학교 산업경영공학과 졸업</li>
        <li>한국디지털미디어고등학교 해킹방어과 졸업</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    component: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const selectedClass =
    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
  const notSelectedClass =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {TAB_DATA.map((item, idx) => {
          return (
            <li className="me-2" key={idx}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange(e.target.innerHTML.toLowerCase());
                }}
                className={item.id === tab ? selectedClass : notSelectedClass}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div>{TAB_DATA.find((t) => t.id === tab).component}</div>
    </div>
  );
};

export default AboutSection;

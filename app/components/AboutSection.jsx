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
      <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the{" "}
          <strong class="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
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

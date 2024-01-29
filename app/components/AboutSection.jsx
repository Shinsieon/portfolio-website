"use client";
import React, { useState } from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

import {
  Chart,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import DoughnutChart from "./DoughnutChart";
import HorizontalLineChart from "./HorizontalLineChart";
import Education from "./Education";
Chart.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    component: (
      <div className="p-3 rounded-lg" role="tabpanel">
        <div className="w-full flex justify-center">
          <DoughnutChart />
          <HorizontalLineChart />
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    component: (
      <div className="p-3 rounded-lg" role="tabpanel">
        <div className="w-full flex justify-start gap-5 pt-5">
          <Education
            icon={<BookOpenIcon className="h-7 w-7" />}
            name={"Digital Media Highschool"}
            timeLine={"2013.03.02 ~ 2016.02.04"}
            detail={"Hacking defence"}
            link={"https://www.dimigo.hs.kr/"}
          />
          <Education
            icon={<AcademicCapIcon className="h-7 w-7" />}
            name={"KyungHee University"}
            timeLine={"2016.03.02 ~ 2022.02.04"}
            detail={"Industrial and Management Engineering"}
            link={"https://www.khu.ac.kr/kor/main/index.do"}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    component: (
      <div className="p-3 rounded-lg" role="tabpanel">
        <div className="w-full flex justify-start gap-5 pt-5">
          <Education
            icon={<DocumentTextIcon className="h-7 w-7" />}
            name={"AFPK"}
            timeLine={"2019.07.28"}
            detail={"재무설계사, ASSOCIATE FINANCIAL PLANNER KOREA"}
            link={"https://www.fpsbkorea.org/?mnu_usn=18"}
          />
          <Education
            icon={<AcademicCapIcon className="h-7 w-7" />}
            name={"Certified Fund Investment Advisor"}
            timeLine={"2022.07.14(22-011385)"}
            detail={"펀드투자권유자문인력"}
            link={"https://license.kofia.or.kr/main/main.do"}
          />
          <Education
            icon={<AcademicCapIcon className="h-7 w-7" />}
            name={"Certified Fund Investment Advisor"}
            timeLine={"2022.05.19(22-007057)"}
            detail={"증권투자권유자문인력"}
            link={"https://license.kofia.or.kr/main/main.do"}
          />
        </div>
      </div>
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
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 h-[400px]">
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

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import VideoPlayer from "./VideoPlayer";

const TAB_DATA = [
  {
    title: "What I Love",
    id: "love",
    content: (
      <ul className="list-disc pl-2">
        <li>Sports</li>
        <li>Read</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
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
    content: (
      <ul className="list-disc pl-2">
        <li>경희대학교 산업경영공학과 졸업</li>
        <li>한국디지털미디어고등학교 해킹방어과 졸업</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("love");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <VideoPlayer />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base text:xl font-bold text-blue-400">
            Thinking about why
          </p>{" "}
          <p className="text-base lg:text-lg">
            이렇게 개발하는게 정말 사용자가 우리 서비스를 사용하는데 도움을
            줄까? 혹은 더 나은 UI, 알고리즘이 있는데 왜 이렇게 해야 하지? 라는
            의문을가지고 합리적인 코드를 지향합니다.
          </p>
          <p className="font-bold text-blue-400">Trying to be best</p>
          <p className="text-base lg:text-lg">
            간단하게 짠 소스 한 줄로 인해 동료들 이 힘들어할수도, 고객에게
            피해를 줄 수 도 있습니다. 한 줄을 짜더라도 신중하게 짜기 위해
            노력합니다.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("love")}
              active={tab === "love"}
            >
              {" "}
              What I Love{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

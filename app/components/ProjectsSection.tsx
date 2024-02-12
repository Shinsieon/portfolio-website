"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "신영증권 MTS 리뉴얼",
    description: "Mobile Trading System Renewal Project",
    image: "/images/projects/green.png",
    tag: ["All", "Mobile"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MTS 채팅 서버 구축",
    description: "NodeJs Chat Server for MTS Service",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "/projects/chat",
  },
  {
    id: 3,
    title: "MTS Push 서버 구축",
    description: "NodeJS Push Server and Admin for MTS Service",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "아파트 매물 알리미",
    description: "NestJS Auto Scrapper of Apartment price Service",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "깨워줘요 앱",
    description: "SwiftUI Subway Alarm App",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    previewUrl: "/",
  },
  {
    id: 6,
    title: "업무 자동화 프로그램",
    description: "PyQT5 Office Automation Programs",
    image: "/images/projects/pyqt.png",
    tag: ["All", "Window Program"],
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            initial="initial"
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Ruby</li>
        <li>Writing</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BSc.Computer Science</li>
        <li>MSc.Artifical Intelligence and Machine Learning</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Responsive Web Design-Free Code Camp</li>
        <li>Step by step guide to Mchine Learning-Edyoda</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a passionate and dedicated individual who has been immersed in the world of coding for the past five years. My coding journey began with JavaScript, where I discovered my love for web development and crafted my initial websites. Over time, my enthusiasm led me to explore the realm of Python programming, where I found joy in creating text-based games and Discord bots. Simultaneously, I am a writer, weaving narratives and expressing creativity through words. As a movie lover, I find inspiration and enjoyment in the world of cinema. Currently pursuing a BSc in Computer Science, I am eager to expand my skills further, delving into the fascinating field of AI bots. With a deep appreciation for coding, writing, and the cinematic arts, I aspire to make a mark in the tech world and become a notable figure in the industry.
          </p>
          <div className="flex flex-row justify-start mt-8">
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

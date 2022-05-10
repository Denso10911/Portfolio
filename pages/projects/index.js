import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export default function Projects() {
  const projects = [
    {
      name: "DoIt",
      description: "A simple application for your to-do list",
      technologies: "React Js",
    },
    {
      name: "GetWeather",
      description: "Minimalistic website for weather control",
      technologies: "React Js",
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | Next JS</title>
      </Head>
      <Wrapper initial='hidden' animate='visible' variants={containerVariants}>
        <TitleAbout initial='hidden' animate='visible' variants={titleVariants}>
          My projects
        </TitleAbout>
        <ProjectsList variants={childrenVariants}>
          {projects.map((item, index) => {
            return (
              <ProjectsItem key={index}>
                <Image
                  src={`/${item.name}.png`}
                  alt='Picture of the author'
                  layout='fill'
                  priority='true'
                  objectFit='cover'
                />
                <ProjectsLearnMore>
                  <ProjectName>{item.name}</ProjectName>
                  <ProjectDescr>{item.description}</ProjectDescr>
                  <ProjectTechno>{item.technologies}</ProjectTechno>
                  <Link href={`/projects/${item.name}`}>
                    <Btn>Learn more</Btn>
                  </Link>
                </ProjectsLearnMore>
              </ProjectsItem>
            );
          })}
        </ProjectsList>
      </Wrapper>
    </>
  );
}

const ProjectTechno = styled.h3`
  text-align: center;
  font-size: 20px;
`;

const ProjectDescr = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 0;
`;

const ProjectName = styled.h2`
  text-align: center;
  font-size: 30px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
  margin: 0;
  :before {
    content: "";
    display: block;
    position: absolute;
    border: 1px solid rgb(60, 1, 107);
    width: 80%;
    margin-left: calc((100% - 80%) / 2);
    bottom: 0;
  }
`;

const Btn = styled.a`
  display: block;
  width: 200px;
  height: 50px;
  border: 2px solid rgb(60, 1, 107);
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  color: rgb(60, 1, 107);
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    color: white;
    background-color: rgb(60, 1, 107);
  }
`;
const ProjectsLearnMore = styled.div`
  display: none;
  opacity: 0;
  background-color: white;
  width: 100%;
  height: 100%;
`;
const ProjectsItem = styled.li`
  position: relative;
  width: 400px;
  height: 400px;
  :hover div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5px;
    opacity: 1;
  }
  :hover > span {
    display: none !important;
  }
`;

const ProjectsList = styled(motion.ul)`
  display: flex;
  gap: 10px;
`;

const Wrapper = styled(motion.main)`
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  padding-top: 55px;
`;

const TitleAbout = styled(motion.h1)`
  font-size: 40px;
  margin-bottom: 50px;
`;

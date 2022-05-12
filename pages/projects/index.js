import { useState } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "DoIt",
    description: "A simple application for your to-do list.",
    technologies: "React Js",
    image: "/DoIt.png",
    imageW: 700,
    imageH: 450,
  },
  {
    name: "GetWeather",
    description: "Minimalistic website for weather control.",
    technologies: "React Js",
    image: "/GetWeather.png",
    imageW: 900,
    imageH: 530,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
      when: "afterChildren",
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Projects() {
  const [selectedProj, setSelectedProj] = useState(projects[0]);

  return (
    <>
      <Head>
        <title>Projects | Next JS</title>
      </Head>
      <Wrapper
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <Title variants={childrenVariants}>My projects</Title>
        <List variants={childrenVariants}>
          {projects.map((item, index) => (
            <Item
              key={index}
              className={item === selectedProj ? "selected" : ""}
              onClick={() => setSelectedProj(item)}
            >
              {`${item.name}`}
              {item === selectedProj ? (
                <motion.div className='underline' layoutId='underline' />
              ) : null}
            </Item>
          ))}
        </List>
        <motion.div variants={childrenVariants}>
          <AnimatePresence exitBeforeEnter>
            <Project
              key={selectedProj ? selectedProj.description : "empty"}
              variants={childrenVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <motion.div className='about' variants={childrenVariants}>
                {selectedProj ? selectedProj.description : "😋"}
                <Link href={`/projects/${selectedProj.name}`}>
                  <a> Learn more</a>
                </Link>
              </motion.div>
              <motion.div className='image' variants={childrenVariants}>
                <Image
                  src={selectedProj ? selectedProj.image : "😋"}
                  alt='Picture of the project'
                  width={selectedProj ? selectedProj.imageW : "😋"}
                  height={selectedProj ? selectedProj.imageH : "😋"}
                />
              </motion.div>
            </Project>
          </AnimatePresence>
        </motion.div>
      </Wrapper>
    </>
  );
}

const Project = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  a {
    font-weight: 700;
  }
`;

const Item = styled(motion.li)`
  position: relative;
  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: rgb(60, 1, 107);
  }
`;

const List = styled(motion.ul)`
  display: flex;
  font-size: 30px;
  margin: 0;
  padding: 0;
  gap: 30px;
`;

const Wrapper = styled(motion.main)`
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 65px;
`;

const Title = styled(motion.h1)`
  font-size: 40px;
  margin: 40px 0 20px;
`;

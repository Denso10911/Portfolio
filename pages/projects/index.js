import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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

export default function Projects() {
  const [selectedProj, setSelectedProj] = useState(projects[0]);

  return (
    <>
      <Head>
        <title>Projects | Next JS</title>
      </Head>
      <Wrapper initial='hidden' animate='visible' variants={containerVariants}>
        <Title variants={titleVariants}>My projects</Title>
        <List>
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
        <main>
          <motion.div
            key={selectedProj ? selectedProj.name : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedProj ? selectedProj.description : "😋"}
          </motion.div>
        </main>
      </Wrapper>
    </>
  );
}
const Item = styled.li`
  position: relative;
  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: black;
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
  padding-bottom: 80px;
  padding-top: 65px;
`;

const Title = styled(motion.h1)`
  font-size: 40px;
  margin: 40px;
`;

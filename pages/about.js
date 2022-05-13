import Head from "next/head";
import { motion } from "framer-motion";
import styled from "styled-components";

import Priority from "../components/About/Priority";
import Biography from "../components/About/Biography";
import Skills from "../components/About/Skills";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.4,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function About() {
  return (
    <>
      <Head>
        <title>About | Next JS</title>
      </Head>
      <Wrapper
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <Title variants={childrenVariants}>About me</Title>
        <Priority />
        <Container variants={childrenVariants}>
          <Biography />
          <Skills />
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(motion.main)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  padding-top: 55px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  display: block;
  font-size: 40px;
  margin-bottom: 50px;
`;

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  gap: 20px;
  @media (max-width: 850px) {
    flex-direction: column;
    width: 80%;
  }
`;

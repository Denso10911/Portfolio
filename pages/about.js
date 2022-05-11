import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Priority from "../components/About/Priority";
import Biography from "../components/About/Biography";
import Skills from "../components/About/Skills";

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
  visible: { opacity: 1 },
  exitTitle: {
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.8,
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
        <Title variants={childrenVariants} exit='exitTitle'>
          About me
        </Title>
        <Container variants={childrenVariants}>
          <Priority />
          <Biography />
          <Skills />
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(motion.main)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  padding-top: 55px;
`;

const Title = styled(motion.h1)`
  font-size: 40px;
  margin-bottom: 50px;
`;

const Container = styled(motion.div)`
  display: grid;
  grid-template-areas: "a a a " "b c c";
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

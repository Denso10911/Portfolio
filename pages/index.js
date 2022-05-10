import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5,
      type: "linear",
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      staggerChildren: 0.5,
      type: "linear",
    },
  },
};

const btnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>Home | Next JS</title>
      </Head>
      <Wrapper
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <Title
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <motion.span variants={variants}>
            Hi, I'm <TitleFocus>Denys</TitleFocus>
          </motion.span>
          <br />
          <motion.span variants={variants}>
            I'm a front-end developer{" "}
          </motion.span>
        </Title>
        <Link href='/projects'>
          <Btn initial='hidden' animate='visible' variants={btnVariants}>
            View my works
          </Btn>
        </Link>
      </Wrapper>
    </motion.div>
  );
}

const Wrapper = styled(motion.main)`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
  padding-top: 55px;
  transition: all 1s ease;
`;

const Title = styled(motion.h1)`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 500;
`;

const TitleFocus = styled.span`
  font-weight: 700;
`;

const Btn = styled(motion.a)`
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

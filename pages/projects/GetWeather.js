import styled from "styled-components";
import Head from "next/head";

import MainModule from "../../components/GetWeather/MainModule";
import ModulesList from "../../components/GetWeather/ModulesList";

import Link from "next/link";
import { motion } from "framer-motion";
import WeatherApi from "../../components/GetWeather/WeatherApi";

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
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function GetWeather() {
  return (
    <>
      <Head>
        <title>GetWeather | Next JS</title>
      </Head>
      <Wrapper
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <TitleAbout variants={childrenVariants}>GetWeather</TitleAbout>
        <Description variants={childrenVariants}>
          The following libraries helped me create this application
        </Description>
        <Container variants={childrenVariants}>
          <MainModule />
          <Modules>
            <ModulesList />
            <WeatherApi />
          </Modules>
        </Container>
      </Wrapper>
    </>
  );
}

const Modules = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Container = styled(motion.div)`
  background-color: #232932;
  box-shadow: 0 0 10px 30px #232932;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 5px 10%;
  width: 100%;
  color: white;
  margin-bottom: 100px;
`;
const Description = styled(motion.div)`
  color: white;
  margin-bottom: 45px;
  text-align: center;
  &.api {
    margin: 0;
    font-size: 20px;
    width: 30%;
    a {
      color: #ff8a1d;
    }
  }
`;
const TitleAbout = styled(motion.h1)`
  font-size: 50px;
  margin-bottom: 50px;
  color: white;
`;
const Wrapper = styled(motion.main)`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  padding-top: 55px;
  background-color: black;
  width: 100%;
  margin: 0 auto;
`;

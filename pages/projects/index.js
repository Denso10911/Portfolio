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
    image: "/DoIt.png",
    imageVariants: ["/DoIt.png"],
  },
  {
    name: "GetWeather",
    description: "Minimalistic website for weather control.",
    image: "/GetWeather.png",
    imageVariants: [
      "/GetWeatherScreen.png",
      "/GetWeatherPhone.png",
      "/GetWeatherTablet.png",
    ],
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

export default function Projects({ navbarOpen }) {
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
        navbarOpen={navbarOpen}
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
        <motion.div variants={childrenVariants} className='projects'>
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
              <Images variants={childrenVariants}>
                <div className='mainImage'>
                  <Image
                    src={selectedProj ? selectedProj.image : "😋"}
                    alt='Picture of the project'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                {selectedProj.imageVariants.map((i) => {
                  return (
                    <div className='imageVariants'>
                      <Image
                        src={i}
                        alt='Picture of the project'
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  );
                })}
              </Images>
            </Project>
          </AnimatePresence>
        </motion.div>
      </Wrapper>
    </>
  );
}

const Images = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;

  .mainImage {
    height: 500px;
    width: 100%;
    position: relative;
    @media (max-width: 600px) {
      display: none;
    }
  }
  .imageVariants {
    height: 300px;
    width: 100%;
    position: relative;
    display: none;
    @media (max-width: 600px) {
      display: block;
      width: 100%;
    }
  }
`;

const Project = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  a {
    font-weight: 700;
  }
  @media (max-width: 425px) {
    width: 95%;
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  transition: padding-top 0.5s ease;
  padding-top: ${(props) => (props.navbarOpen ? "85px" : "55px")};
  .projects {
    width: 100%;
    margin-bottom: 75px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 40px;
  margin: 40px 0 20px;
`;

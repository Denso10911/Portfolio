import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";

import ModulesList from "../../components/DoIt/ModulesList";
import LinksItem from "../../components/DoIt/LinksItem";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.8,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function DoIt({ navbarOpen }) {
  return (
    <>
      <Head>
        <title>Do It | Next JS</title>
      </Head>
      <Wrapper
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        navbarOpen={navbarOpen}
      >
        <TitleAbout variants={childrenVariants}>Do It</TitleAbout>
        <Container variants={childrenVariants}>
          <Description variants={titleVariants}>
            I present to your attention a simple site for saving to bring the
            set before you.
          </Description>
          <Modules>
            <Titles variants={titleVariants}>
              In this project, I used this series of libraries, which helped me
              write a functional and easy-to-use application.
            </Titles>
            <ModulesList />
          </Modules>
          <Links>
            <LinksItem />
            <Titles variants={titleVariants}>
              You can also follow the link to this site and try the
              functionality of this application
            </Titles>
          </Links>
        </Container>
      </Wrapper>
    </>
  );
}

const Titles = styled(motion.h2)`
  color: white;
  font-size: 20px;
  font-weight: normal;
  display: flex;
  align-items: center;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Modules = styled(motion.div)`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Links = styled(motion.div)`
  display: flex;
  gap: 20px;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Description = styled(motion.div)`
  display: flex;
  border-radius: 10px;
  padding: 10px;
  border: none;
  color: #9ca4af;
  font-size: 25px;
  width: 90%;
  box-sizing: border-box;
  justify-content: center;
  background-color: white;
  margin-bottom: 30px;
  @media (max-width: 425px) {
    width: 100%;
    padding: 5px;
    margin-bottom: 15px;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  width: 80%;
  padding: 30px;
  margin: 0 auto 50px;
  border-radius: 10px;
  background-color: #67979f;
  transition: all 0.5s ease;
  max-width: 1200px;
  @media (max-width: 425px) {
    width: 95%;
    padding: 20px;
  }
`;

const Wrapper = styled(motion.main)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  transition: padding-top 0.5s ease;
  padding-top: ${(props) => (props.navbarOpen ? "85px" : "55px")};
  background: rgb(148, 216, 227);
  background: linear-gradient(
    219deg,
    rgba(148, 216, 227, 1) 0%,
    rgba(181, 228, 236, 1) 76%,
    rgba(255, 255, 255, 1) 100%
  );
  background-size: cover;
  overflow-x: hidden;
`;

const TitleAbout = styled(motion.h1)`
  font-size: 40px;
  margin: 30px auto;
  color: #009688;
`;

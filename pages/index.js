import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
  exit: {
    transition: {
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
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
      delayChildren: 0.2,
    },
  },
};

const spanVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Home({ navbarOpen }) {
  return (
    <>
      <Head>
        <title>Home | Next JS</title>
      </Head>
      <Wrapper
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        navbarOpen={navbarOpen}
      >
        <motion.div variants={childrenVariants}>
          <Title>
            <motion.div variants={spanVariants}>
              Hi, I'm <TitleFocus>Denys</TitleFocus>
            </motion.div>
            <motion.div variants={spanVariants}>
              I'm a front-end developer{" "}
            </motion.div>
          </Title>
        </motion.div>
        <motion.div variants={childrenVariants}>
          <Btn>
            <Link href='/projects'>
              <a>View my works</a>
            </Link>
          </Btn>
        </motion.div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(motion.main)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
  padding-top: 55px;
  transition: all 1s ease;
  @media (max-width: 600px) {
    padding-top: ${(props) => (props.navbarOpen ? "85px" : "55px")};
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 500;
`;

const TitleFocus = styled.span`
  font-weight: 700;
`;

const Btn = styled.div`
  display: block;
  width: 200px;
  padding: 10px;
  border: 2px solid rgb(60, 1, 107);
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  color: rgb(60, 1, 107);
  transition: all 0.3s ease;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
  }
  :hover {
    a {
      color: white;
    }
    background-color: rgb(60, 1, 107);
  }
`;

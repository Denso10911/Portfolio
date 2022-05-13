import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

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
      delayChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {},
  },
  exit: { opacity: 0 },
};

export default function Biography() {
  return (
    <Container
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Photo variants={childrenVariants}>
        <Image
          src='/me.jpg'
          alt='Picture of the author'
          layout='fill'
          priority='true'
        />
      </Photo>
      <Paragraph variants={childrenVariants}>
        I'm a Front-End Developer from Kyiv, Ukraine. I have serious passion for
        UI effects, animations and creating intuitive, dynamic user experiences.
        <Link href='/'>
          <a> Let's make something special.</a>
        </Link>
      </Paragraph>
    </Container>
  );
}
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 850px) {
    flex-direction: row;
  }
`;

const Photo = styled(motion.div)`
  width: 240px;
  height: 300px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 25px;
`;

const Paragraph = styled(motion.p)`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 850px) {
    width: 50%;
  }
`;

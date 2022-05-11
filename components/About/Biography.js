import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Biography() {
  return (
    <Container>
      <Photo>
        <Image
          src='/me.jpg'
          alt='Picture of the author'
          layout='fill'
          priority='true'
        />
      </Photo>
      <Paragraph>
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
  display: grid;
  justify-items: center;
  text-align: center;
  grid-area: b;
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
`;

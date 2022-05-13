import styled, { keyframes } from "styled-components";

import { FaReact } from "@react-icons/all-files/fa/FaReact";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
    },
  },
  exit: { opacity: 0, x: -200 },
};

export default function MainModule() {
  return (
    <>
      <Module variants={containerVariants}>
        <Icon>
          <FaReact />
        </Icon>
        <Name>React.js</Name>
      </Module>
    </>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Module = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ff8a1d;
  width: 20vw;
  div {
    font-size: 100px;
    height: 100px;
    width: 100px;
  }

  h4 {
    color: white;
    font-size: 35px;
  }
`;

const Icon = styled(motion.div)`
  font-size: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-weight: normal;
  animation: ${rotate} 20s linear infinite;
`;

const Name = styled.h4`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

import styled from "styled-components";
import Head from "next/head";
import { SiReactrouter } from "@react-icons/all-files/si/SiReactrouter";
import { SiFontawesome } from "@react-icons/all-files/si/SiFontawesome";
import { GiPlatform } from "@react-icons/all-files/gi/GiPlatform";
import { FiFramer } from "@react-icons/all-files/fi/FiFramer";
import { CgArrowsExchange } from "@react-icons/all-files/cg/CgArrowsExchange";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
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
  const modules = [
    { name: "React Router", icon: <SiReactrouter /> },
    { name: "Framer Motion", icon: <FiFramer /> },
    { name: "Axios", icon: <CgArrowsExchange /> },
    { name: "Formik", icon: <GiPlatform /> },
    { name: "Font Awesome", icon: <SiFontawesome /> },
  ];
  return (
    <>
      <List
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {modules.map((item, index) => {
          return (
            <Item key={index} variants={childrenVariants}>
              <Icons>
                <Icon>{item.icon}</Icon>
              </Icons>
              <Name>{item.name}</Name>
            </Item>
          );
        })}
      </List>
    </>
  );
}

const Icon = styled.div`
  font-size: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-weight: normal;
`;

const Icons = styled(motion.div)`
  display: flex;
  margin-bottom: 10px;
`;

const Name = styled(motion.h4)`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

const Item = styled(motion.li)`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  color: white;
  padding: 20px 5px;
  box-sizing: border-box;
  position: relative;
`;

const List = styled(motion.ul)`
  width: 90%;
  height: 150px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-around;
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 90%;
    border: 1px solid white;
    bottom: 0;
    left: calc((100% - 90%) / 2);
  }
`;

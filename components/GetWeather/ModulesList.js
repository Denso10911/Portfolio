import styled from "styled-components";
import Head from "next/head";
import { SiReactrouter } from "@react-icons/all-files/si/SiReactrouter";
import { SiFontawesome } from "@react-icons/all-files/si/SiFontawesome";
import { GiPlatform } from "@react-icons/all-files/gi/GiPlatform";
import { FiFramer } from "@react-icons/all-files/fi/FiFramer";
import { CgArrowsExchange } from "@react-icons/all-files/cg/CgArrowsExchange";

import Link from "next/link";
import { motion } from "framer-motion";

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom / 4,
    },
  }),
  exit: (custom) => ({
    opacity: 0,
    transition: {
      delay: custom * 0.1,
    },
  }),
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
      <List initial='hidden' animate='visible' exit='exit'>
        {modules.map((item, index) => {
          return (
            <Item
              key={index}
              variants={childrenVariants}
              custom={index + 1}
              initial='hidden'
              whileInView='visible'
              exit='exit'
              viewport={{ amount: 0.3, once: true }}
            >
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
  @media (max-width: 375px) {
    height: 40px;
    width: 40px;
    font-size: 40px;
  }
`;

const Icons = styled(motion.div)`
  display: flex;
  margin-bottom: 10px;
`;

const Name = styled(motion.h4)`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
  @media (max-width: 375px) {
    font-size: 25px;
  }
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
  @media (max-width: 500px) {
    width: 150px;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
`;

const List = styled(motion.ul)`
  width: 90%;
  height: 150px;
  padding: 0;
  display: flex;
  justify-content: space-around;
  position: relative;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    height: auto;
  }
  :before {
    content: "";
    position: absolute;
    width: 90%;
    border: 1px solid white;
    bottom: 0;
    left: calc((100% - 90%) / 2);
  }
`;

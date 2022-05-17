import styled from "styled-components";
import { useState } from "react";
import { FiCheckSquare } from "@react-icons/all-files/fi/FiCheckSquare";
import { FiSquare } from "@react-icons/all-files/fi/FiSquare";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FiFramer } from "@react-icons/all-files/fi/FiFramer";
import { SiIcon } from "@react-icons/all-files/si/SiIcon";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
      delayChildren: 0.2,
      when: "afterChildren",
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

export default function ModulesList() {
  const [modules, setModules] = useState([
    { name: "React.js", icon: <FaReact />, done: false },
    { name: "Framer Motion", icon: <FiFramer />, done: false },
    { name: "React Icons", icon: <SiIcon />, done: true },
  ]);
  const onTaskDone = (name) => {
    setModules((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, done: !item.done } : item
      )
    );
  };
  return (
    <List
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {modules.map((item, index) => {
        return (
          <Item key={index} variants={childrenVariants}>
            <Title done={item.done}>{item.name}</Title>
            <Icons>
              {item.done && (
                <IconDone
                  onClick={() => {
                    onTaskDone(item.name);
                  }}
                >
                  <FiCheckSquare />
                </IconDone>
              )}
              {!item.done && (
                <IconDone
                  onClick={() => {
                    onTaskDone(item.name);
                  }}
                >
                  <FiSquare />
                </IconDone>
              )}
              <Logo>{item.icon}</Logo>
            </Icons>
          </Item>
        );
      })}
    </List>
  );
}

const IconDone = styled.button`
  font-size: 20px;
  margin: 0;
  color: black;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-weight: normal;
`;

const Logo = styled.div`
  font-size: 20px;
  margin: 0;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-weight: normal;
`;

const Icons = styled.div`
  display: flex;
`;

const Title = styled.h4`
  font-size: 20px;
  margin: 0;
  color: black;
  font-weight: normal;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  font-style: ${(props) => (props.done ? "italic" : "normal")};
`;

const Item = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #009688;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const List = styled(motion.ul)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

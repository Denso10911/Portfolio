import styled from "styled-components";
import { motion } from "framer-motion";
import {
  MdSpeed,
  MdDevicesOther,
  MdLightbulbOutline,
  MdOutlineFastForward,
} from "react-icons/md";

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
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Priority() {
  const priority = [
    {
      icon: <MdSpeed />,
      title: "Fast",
      text: "Fast load times and lag free interaction, my highest priority.",
    },
    {
      icon: <MdDevicesOther />,
      title: "Responsive",
      text: " My layouts will work on any device, big or small.",
    },
    {
      icon: <MdLightbulbOutline />,
      title: "Intuitive",
      text: "Strong preference for easy to use, intuitive UX/UI.",
    },
    {
      icon: <MdOutlineFastForward />,
      title: "Dynamic",
      text: `Websites don't have to be static, I love making pages come to life.`,
    },
  ];

  return (
    <List
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {priority.map((item, index) => {
        return (
          <Item key={index} variants={childrenVariants}>
            <Icon>{item.icon}</Icon>
            <Title>{item.title}</Title>
            <Paragraph>{item.text}</Paragraph>
          </Item>
        );
      })}
    </List>
  );
}

const List = styled(motion.ul)`
  display: grid;
  grid-area: a;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 50px;
  position: relative;
`;

const Item = styled(motion.li)`
  display: grid;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 40px;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  :before {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    background-color: rgb(60, 1, 107);
    width: 30%;
    margin-left: calc((100% - 30%) / 2);
    bottom: 0;
  }
`;

const Title = styled.h3`
  font-size: 25px;
  margin: 0;
  padding: 0;
`;

const Paragraph = styled(motion.p)`
  padding: 0px 5px;
`;

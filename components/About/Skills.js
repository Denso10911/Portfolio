import styled from "styled-components";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";

const scaleVariants = {
  hidden: { opacity: 0, display: "none" },
  visible: {
    opacity: 1,
    display: "flex",
  },
};

export default function Skills() {
  const skills = [
    { skill: "HTML", point: 70 },
    { skill: "CSS", point: 80 },
    { skill: "JavaScript", point: 60 },
    { skill: "React", point: 70 },
    { skill: "Next.js", point: 65 },
    { skill: "Photoshop", point: 40 },
  ];

  return (
    <List
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.5, once: true }}
    >
      {skills.map((item, index) => {
        return (
          <Item key={index}>
            <Title>{item.skill}</Title>
            <Scale point={item.point} variants={scaleVariants}>
              <Point>{`${item.point} %`}</Point>
            </Scale>
          </Item>
        );
      })}
    </List>
  );
}
const ScaleWidth = (w) => keyframes`
  from {
    width: 0px 
  }

  to {
    width: ${w}%
  }
`;

const ScaleHeight = (w) => keyframes`
  from {
    height: 0px 
  }

  to {
    height: ${w}%
  }
`;

const Scale = styled(motion.div)`
  background-color: rgb(216, 185, 242);
  display: flex;
  justify-content: end;
  width: ${(props) => `${props.point}%`};
  animation: ${(props) => ScaleWidth(`${props.point}%`)} 2s linear;
  @media (max-width: 850px) {
    position: absolute;
    bottom: 40px;
    height: ${(props) => `${props.point}%`};
    width: 100px;
    background-color: rgb(216, 185, 242);
    animation: ${(props) => ScaleHeight(`${props.point}%`)} 2s linear;
  }
  @media (max-width: 768px) {
    width: 30px;
  }
`;

const Point = styled.div`
  width: 50px;
  @media (max-width: 850px) {
    position: absolute;
    width: 100px;
  }
  @media (max-width: 768px) {
    top: -25px;
    left: -7px;
    width: 44px;
  }
`;

const Title = styled.div`
  text-align: center;
  width: 100px;
  background-color: rgb(175, 113, 226);
  @media (max-width: 850px) {
    background-color: rgb(175, 113, 226);
    padding: 10px 0;
    z-index: 2;
  }
  @media (max-width: 768px) {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    width: 30px;
    height: 100px;
  }
`;

const Item = styled(motion.li)`
  display: grid;
  grid-template-columns: 100px 400px;
  margin-bottom: 10px;
  height: 30px;
  line-height: 30px;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    position: relative;
  }
`;

const List = styled(motion.ul)`
  margin: 0;
  padding: 0;
  @media (max-width: 850px) {
    display: flex;
    height: 250px;
    justify-content: space-between;
    text-align: center;
  }
  @media (max-width: 768px) {
    height: 300px;
    width: 60%;
    margin: 0 auto;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;

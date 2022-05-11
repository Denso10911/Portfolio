import styled from "styled-components";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { skill: "HTML", point: 70 },
    { skill: "CSS", point: 80 },
    { skill: "JavaScript", point: 60 },
    { skill: "React", point: 70 },
    { skill: "Next.js", point: 65 },
  ];

  return (
    <List>
      {skills.map((item, index) => {
        return (
          <Item key={index}>
            <Title>{item.skill}</Title>
            <Scale
              point={item.point}
              initial={{ width: 0 }}
              animate={{ width: `${item.point}%` }}
              transition={{
                duration: 2,
              }}
            ></Scale>
            <Point>{`${item.point} %`}</Point>
          </Item>
        );
      })}
    </List>
  );
}
const Scale = styled(motion.div)`
  background-color: rgb(216, 185, 242);
  height: 30px;
`;

const Point = styled.div`
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
  width: 100px;
  background-color: rgb(175, 113, 226);
`;

const Item = styled(motion.li)`
  display: grid;
  grid-template-columns: 100px 400px 100px;
  justify-content: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
`;

const List = styled(motion.ul)`
  display: grid;
  align-items: center;
  grid-area: c;
  text-align: center;
  row-gap: 5px;
  height: 60%;
  margin-bottom: 80px;
`;

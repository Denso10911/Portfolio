import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

import {
  MdSpeed,
  MdDevicesOther,
  MdLightbulbOutline,
  MdOutlineFastForward,
} from "react-icons/md";

export default function About() {
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
  const skills = [
    { skill: "HTML", point: 70 },
    { skill: "CSS", point: 80 },
    { skill: "JavaScript", point: 60 },
    { skill: "React", point: 70 },
    { skill: "Next.js", point: 65 },
  ];

  return (
    <Wrapper>
      <TitleAbout>About me</TitleAbout>
      <Container>
        <PriorityList>
          {priority.map((item, index) => {
            return (
              <PriorityItem key={index}>
                <PriorityIcon>{item.icon}</PriorityIcon>
                <PriorityTitle>{item.title}</PriorityTitle>
                <PriorityParagraph>{item.text}</PriorityParagraph>
              </PriorityItem>
            );
          })}
        </PriorityList>
        <MyBiography>
          <MyPhoto>
            <Image
              src='/me.jpg'
              alt='Picture of the author'
              layout='fill'
              priority='true'
            />
          </MyPhoto>
          <AboutMe>
            I'm a Front-End Developer from Kyiv, Ukraine. I have serious passion
            for UI effects, animations and creating intuitive, dynamic user
            experiences.
            <Link href='/'>
              <a>Let's make something special.</a>
            </Link>
          </AboutMe>
        </MyBiography>
        <MySkills>
          {skills.map((item, index) => {
            return (
              <Skill key={index}>
                <SkillName>{item.skill}</SkillName>
                <SkillScale point={item.point}></SkillScale>
                <SkillPoint>{`${item.point} %`}</SkillPoint>
              </Skill>
            );
          })}
        </MySkills>
      </Container>
    </Wrapper>
  );
}
const SkillScale = styled.div`
  width: ${(props) => `${props.point}%` || "100px"};
  background-color: rgb(216, 185, 242);
  height: 30px;
`;

const SkillPoint = styled.div`
  text-align: center;
`;

const SkillName = styled.div`
  text-align: center;
  width: 100px;
  background-color: rgb(175, 113, 226);
`;

const Skill = styled.div`
  display: grid;
  grid-template-columns: 100px 400px 100px;
  justify-content: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
`;

const MySkills = styled.div`
  display: grid;
  align-items: center;
  grid-area: c;
  text-align: center;
  row-gap: 5px;
  height: 60%;
  margin-bottom: 80px;
`;

const Wrapper = styled.main`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
`;

const TitleAbout = styled.h1`
  font-size: 40px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: grid;
  grid-template-areas: "a a a " "b c c";
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

const PriorityList = styled.ul`
  display: grid;
  grid-area: a;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding: 0 0 50px;
  margin-bottom: 50px;
  position: relative;
  :before {
    content: "";
    display: block;
    position: absolute;
    border: 1px solid rgb(60, 1, 107);
    width: 60%;
    margin-left: calc((100% - 60%) / 2);
    bottom: 0;
  }
`;

const PriorityItem = styled.li`
  display: grid;
  text-align: center;
`;

const PriorityIcon = styled.div`
  font-size: 40px;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  :before {
    content: "";
    display: block;
    position: absolute;
    border: 1px solid rgb(60, 1, 107);
    width: 30%;
    margin-left: calc((100% - 30%) / 2);
    bottom: 0;
  }
`;

const PriorityTitle = styled.h3`
  font-size: 25px;
  margin: 0;
  padding: 0;
`;

const PriorityParagraph = styled.p`
  padding: 0px 5px;
`;

const MyBiography = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  grid-area: b;
`;

const MyPhoto = styled.div`
  width: 240px;
  height: 300px;
  position: relative;
  box-sizing: border-box;
`;

const AboutMe = styled.p`
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

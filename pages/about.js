import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  MdSpeed,
  MdDevicesOther,
  MdLightbulbOutline,
  MdOutlineFastForward,
} from "react-icons/md";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

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
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>About | Next JS</title>
      </Head>
      <Wrapper>
        <TitleAbout>About me</TitleAbout>
        <Container>
          <PriorityList variants={childrenVariants}>
            {priority.map((item, index) => {
              return (
                <PriorityItem key={index} variants={childrenVariants}>
                  <PriorityIcon>{item.icon}</PriorityIcon>
                  <PriorityTitle>{item.title}</PriorityTitle>
                  <PriorityParagraph variants={childrenVariants}>
                    {item.text}
                  </PriorityParagraph>
                </PriorityItem>
              );
            })}
          </PriorityList>
          <MyBiography variants={childrenVariants}>
            <MyPhoto variants={childrenVariants}>
              <Image
                src='/me.jpg'
                alt='Picture of the author'
                layout='fill'
                priority='true'
              />
            </MyPhoto>
            <AboutMe variants={childrenVariants}>
              I'm a Front-End Developer from Kyiv, Ukraine. I have serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
              <Link href='/'>
                <a>Let's make something special.</a>
              </Link>
            </AboutMe>
          </MyBiography>
          <MySkills
            variants={childrenVariants}
            transition={{
              duration: 12,
            }}
          >
            {skills.map((item, index) => {
              return (
                <Skill key={index} variants={childrenVariants}>
                  <SkillName>{item.skill}</SkillName>
                  <SkillScale
                    point={item.point}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.point}%` }}
                    transition={{
                      duration: 2,
                    }}
                  ></SkillScale>
                  <SkillPoint>{`${item.point} %`}</SkillPoint>
                </Skill>
              );
            })}
          </MySkills>
        </Container>
      </Wrapper>
    </motion.div>
  );
}
const SkillScale = styled(motion.div)`
  /* width: ${(props) => `${props.point}%` || "100px"}; */
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

const Skill = styled(motion.div)`
  display: grid;
  grid-template-columns: 100px 400px 100px;
  justify-content: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
`;

const MySkills = styled(motion.div)`
  display: grid;
  align-items: center;
  grid-area: c;
  text-align: center;
  row-gap: 5px;
  height: 60%;
  margin-bottom: 80px;
`;

const Wrapper = styled(motion.main)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  padding-top: 55px;
`;

const TitleAbout = styled(motion.h1)`
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

const PriorityList = styled(motion.ul)`
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

const PriorityItem = styled(motion.li)`
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

const PriorityParagraph = styled(motion.p)`
  padding: 0px 5px;
`;

const MyBiography = styled(motion.div)`
  display: grid;
  justify-items: center;
  text-align: center;
  grid-area: b;
`;

const MyPhoto = styled(motion.div)`
  width: 240px;
  height: 300px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 25px;
`;

const AboutMe = styled(motion.p)`
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

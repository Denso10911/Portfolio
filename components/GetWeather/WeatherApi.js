import styled from "styled-components";
import { TiWeatherWindyCloudy } from "@react-icons/all-files/ti/TiWeatherWindyCloudy";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function WeatherApi() {
  return (
    <>
      <Container
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <Title variants={childrenVariants}>
          <Link href='https://openweathermap.org/'>
            <a target='_blank'>Openweathermap</a>
          </Link>
        </Title>
        <Icon variants={childrenVariants}>
          <TiWeatherWindyCloudy />
        </Icon>
        <Description className='api' variants={childrenVariants}>
          Weather for any geographic coordinates on the globe
          <br />
          <Link href='https://denso10911.github.io/GetWeather/'>
            <a target='_blank'> View on my web-site</a>
          </Link>
        </Description>
      </Container>
    </>
  );
}

const Icon = styled(motion.div)`
  display: flex;
  font-size: 40px;
`;

const Title = styled(motion.div)`
  display: flex;
  font-size: 30px;
  a {
    color: white;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 150px;
  gap: 30px;
`;

const Description = styled(motion.div)`
  color: white;
  margin-bottom: 45px;
  text-align: center;
  &.api {
    margin: 0;
    font-size: 20px;
    width: 30%;
    a {
      color: #ff8a1d;
    }
  }
`;

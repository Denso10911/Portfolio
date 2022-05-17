import styled from "styled-components";
import { TiWeatherWindyCloudy } from "@react-icons/all-files/ti/TiWeatherWindyCloudy";
import Link from "next/link";
import { motion } from "framer-motion";

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function WeatherApi() {
  return (
    <>
      <Container
        initial='hidden'
        whileInView='visible'
        exit='exit'
        viewport={{ amount: 0.4, once: true }}
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
  @media (max-width: 800px) {
    font-size: 25px;
  }
  @media (max-width: 375px) {
    font-size: 30px;
  }
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
  width: 90%;
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    gap: 10px;
    margin-top: 15px;
  }
`;

const Description = styled(motion.div)`
  color: white;
  margin-bottom: 45px;
  text-align: center;
  &.api {
    margin: 0;
    font-size: 20px;
    width: 30%;
    @media (max-width: 1024px) {
      width: 50%;
    }
    @media (max-width: 800px) {
      font-size: 18px;
    }
    @media (max-width: 600px) {
      width: 90%;
    }
    @media (max-width: 375px) {
      font-size: 25px;
      width: 95%;
    }
    a {
      color: #ff8a1d;
    }
  }
`;

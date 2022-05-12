import styled from "styled-components";
import Head from "next/head";

import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiReactrouter } from "@react-icons/all-files/si/SiReactrouter";
import { SiFontawesome } from "@react-icons/all-files/si/SiFontawesome";
import { GiPlatform } from "@react-icons/all-files/gi/GiPlatform";
import { FiFramer } from "@react-icons/all-files/fi/FiFramer";
import { CgArrowsExchange } from "@react-icons/all-files/cg/CgArrowsExchange";
import { TiWeatherWindyCloudy } from "@react-icons/all-files/ti/TiWeatherWindyCloudy";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GetWeather() {
  const modules = [
    { name: "React.js", icon: <FaReact /> },
    { name: "React Router Dom", icon: <SiReactrouter /> },
    { name: "Framer Motion", icon: <FiFramer /> },
    { name: "Axios", icon: <CgArrowsExchange /> },
    { name: "Formik", icon: <GiPlatform /> },
    { name: "Font Awesome", icon: <SiFontawesome /> },
  ];
  return (
    <>
      <Head>
        <title>GetWeather | Next JS</title>
      </Head>
      <Wrapper>
        <TitleAbout>GetWeather</TitleAbout>
        <Description>Сreated with:</Description>
        <Container>
          <ModulesList>
            {modules.map((item, index) => {
              return (
                <ModulesItem key={index}>
                  <ModulesIcons>
                    <ModulesIcon>{item.icon}</ModulesIcon>
                  </ModulesIcons>
                  <ModulesName>{item.name}</ModulesName>
                </ModulesItem>
              );
            })}
          </ModulesList>
          <WeatherApi>
            <WeatherApiIcon>
              <TiWeatherWindyCloudy />
            </WeatherApiIcon>
            <WeatherApiTitle>
              <Link href='https://openweathermap.org/'>
                <a>Openweathermap</a>
              </Link>
            </WeatherApiTitle>
          </WeatherApi>
        </Container>
        <LinkToSite>
          <Link href='https://denso10911.github.io/GetWeather/'>
            <a target='_blank'>View web-site</a>
          </Link>
        </LinkToSite>
      </Wrapper>
    </>
  );
}

const LinkToSite = styled.div`
  background-color: #353434;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  box-sizing: border-box;
  color: #fff;
  width: 300px;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  padding-left: 10px;
  a {
    color: white;
  }
`;

const WeatherApiIcon = styled.div`
  display: flex;
  font-size: 40px;
`;

const WeatherApiTitle = styled.div`
  display: flex;
  font-size: 30px;
  a {
    color: white;
  }
`;

const WeatherApi = styled.div`
  display: flex;
  margin: 40px 0 30px;
  gap: 30px;
`;

const ModulesIcon = styled.div`
  font-size: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-weight: normal;
`;

const ModulesIcons = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ModulesName = styled.h4`
  font-size: 20px;
  margin: 0;
  font-weight: normal;
`;

const ModulesItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  color: white;
  padding: 20px 5px;
  box-sizing: border-box;
  position: relative;
`;

const ModulesList = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 90%;
    border: 1px solid white;
    bottom: -20px;
    left: calc((100% - 90%) / 2);
  }
`;

const Container = styled.div`
  background-color: #232932;
  box-shadow: 0 0 10px 30px #232932;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  padding: 5px 3%;
  width: 100%;
  color: white;
  margin-bottom: 150px;
`;
const Description = styled.div`
  color: white;
  margin-bottom: 45px;
`;

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  padding-top: 55px;
  background-color: black;
`;

const TitleAbout = styled.h1`
  font-size: 50px;
  margin-bottom: 50px;
  color: white;
`;

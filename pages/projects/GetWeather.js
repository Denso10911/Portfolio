import styled from "styled-components";
import Head from "next/head";

export default function GetWeather() {
  return (
    <>
      <Head>
        <title>GetWeather | Next JS</title>
      </Head>
      <Wrapper>
        <TitleAbout>GetWeather</TitleAbout>
      </Wrapper>
    </>
  );
}

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

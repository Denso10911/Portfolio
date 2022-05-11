import styled from "styled-components";
import Head from "next/head";

import ModulesList from "../../components/DoIt/ModulesList";
import LinksItem from "../../components/DoIt/LinksItem";

export default function DoIt() {
  return (
    <>
      <Head>
        <title>Do It | Next JS</title>
      </Head>
      <Wrapper>
        <TitleAbout>Do It</TitleAbout>
        <Container>
          <Description>
            I present to your attention a simple site for saving to bring the
            set before you.
          </Description>
          <Modules>
            <ModulesTitle>
              In this project, I used this series of libraries, which helped me
              write a functional and easy-to-use application.
            </ModulesTitle>
            <ModulesList />
          </Modules>
          <Links>
            <LinksItem />
            <LinksTitle>
              You can also follow the link to this site and try the
              functionality of this application
            </LinksTitle>
          </Links>
        </Container>
      </Wrapper>
    </>
  );
}

const ModulesTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: normal;
  width: 30%;
  display: flex;
  align-items: center;
`;

const LinksTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: normal;
  display: flex;
  align-items: center;
`;

const Modules = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
  justify-content: space-between;
`;

const Description = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 10px;
  border: none;
  color: #9ca4af;
  font-size: 25px;
  width: 90%;
  box-sizing: border-box;
  justify-content: center;
  background-color: white;
  margin-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  width: 80%;
  padding: 30px;
  margin: 0 auto 50px;
  border-radius: 10px;
  background-color: #67979f;
  transition: all 0.5s ease;
  max-width: 1200px;
`;

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
  padding-top: 55px;
  background: rgb(148, 216, 227);
  background: linear-gradient(
    219deg,
    rgba(148, 216, 227, 1) 0%,
    rgba(181, 228, 236, 1) 76%,
    rgba(255, 255, 255, 1) 100%
  );
  background-size: cover;
`;

const TitleAbout = styled.h1`
  font-size: 40px;
  margin: 30px auto;
  color: #009688;
`;

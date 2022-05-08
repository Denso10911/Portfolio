import styled from "styled-components";
import Head from "next/head";

export default function DoIt() {
  const modules = [
    { name: "React.js", icon: 1 },
    { name: "Framer Motion", icon: 2 },
    { name: "React Icons", icon: 3 },
  ];

  return (
    <>
      <Head>
        <title>Do It | Next JS</title>
      </Head>
      <Wrapper>
        <TitleAbout>Do It</TitleAbout>
        <Description>
          I present to your attention a simple site for saving to bring the set
          before you. This site with a nice design and clear user interface.
        </Description>
        <Modules>
          {modules.map((item, index) => {
            return (
              <Module key={index}>
                <ModuleName>{item.name}</ModuleName>
              </Module>
            );
          })}
        </Modules>
      </Wrapper>
    </>
  );
}

const ModuleName = styled.h4`
  font-size: 20px;
`;

const Module = styled.li`
  display: flex;
  justify-content: space-around;
`;

const Modules = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  display: flex;
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

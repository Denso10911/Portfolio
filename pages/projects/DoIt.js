import styled from "styled-components";
import Head from "next/head";
import { FaReact } from "react-icons/fa";
import {
  FiFramer,
  FiCheckSquare,
  FiSquare,
  FiCodesandbox,
} from "react-icons/fi";
import { SiIconfinder } from "react-icons/si";
import { BiColorFill } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import Link from "next/link";

export default function DoIt(props) {
  const [modules, setModules] = useState([
    { name: "React.js", icon: <FaReact />, done: false },
    { name: "Framer Motion", icon: <FiFramer />, done: false },
    { name: "React Icons", icon: <SiIconfinder />, done: true },
  ]);

  let [editMode, setEditMode] = useState(true);
  let [linkColor, setLinkColor] = useState("rgb(103, 58, 183)");
  let colors = [
    "rgb(235, 19, 19)",
    "rgb(233, 30, 99)",
    "rgb(103, 58, 183)",
    "rgb(0, 150, 136)",
    "rgb(76, 175, 80)",
  ];

  const onTaskDone = (name) => {
    setModules((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, done: !item.done } : item
      )
    );
  };

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
            <ModulesList>
              {modules.map((item, index) => {
                return (
                  <ModulesItem key={index}>
                    <ModulesName done={item.done}>{item.name}</ModulesName>
                    <ModulesIcons>
                      {item.done ? (
                        <ModulesIconDone
                          onClick={() => {
                            onTaskDone(item.name);
                          }}
                        >
                          <FiCheckSquare />
                        </ModulesIconDone>
                      ) : (
                        <ModulesIconDone
                          onClick={() => {
                            onTaskDone(item.name);
                          }}
                        >
                          <FiSquare />
                        </ModulesIconDone>
                      )}
                      <ModulesIcon>{item.icon}</ModulesIcon>
                    </ModulesIcons>
                  </ModulesItem>
                );
              })}
            </ModulesList>
          </Modules>
          <Links>
            <LinksItem color={linkColor}>
              <LinksIcons>
                <LinksIcon>
                  <FiCodesandbox />
                </LinksIcon>
                <LinksIconColor>
                  {!editMode && (
                    <button
                      onClick={() => {
                        setEditMode(!editMode);
                      }}
                      className='links__btn'
                    >
                      <BiColorFill />
                    </button>
                  )}
                  {editMode && (
                    <>
                      <button
                        onClick={() => {
                          setEditMode(!editMode);
                        }}
                        className='links__btn'
                      >
                        <AiOutlineClose />
                      </button>
                      <div className='todoPriority__container'>
                        {colors.map((e, index) => {
                          return (
                            <span
                              onClick={() => {
                                setLinkColor(e);
                                setEditMode(false);
                              }}
                              className='link__colors'
                              key={index}
                              style={{ backgroundColor: `${e}` }}
                            ></span>
                          );
                        })}
                      </div>
                    </>
                  )}
                </LinksIconColor>
              </LinksIcons>
              <LinksBtn>
                Try with{" "}
                <Link href='https://codesandbox.io/s/github/Denso10911/DoIT'>
                  <a
                    style={{ color: "white", fontWeight: "bold" }}
                    target='_blank'
                  >
                    CodeSandBox
                  </a>
                </Link>
              </LinksBtn>
            </LinksItem>
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

const LinksBtn = styled.div`
  color: black;
`;

const LinksIconColor = styled.div`
  .links__btn {
    font-size: 20px;
    margin: 0;
    color: black;
    background-color: inherit;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    font-weight: normal;
  }

  .todoPriority__container {
    display: grid;
    gap: 3px;
    padding: 3px;
    border-radius: 5px;
    position: absolute;
    left: 0;
    opacity: 1;
  }
  .todoPriority__container > span {
    width: 30px;
    height: 30px;
    box-shadow: 0 0 3px black;
    border-radius: 50%;
    position: absolute;
    top: -65px;
    z-index: 1;
  }

  .todoPriority__container > span:hover {
    box-shadow: 0 0 5px black;
  }

  .todoPriority__container > span:nth-child(1) {
    left: 0px;
  }

  .todoPriority__container > span:nth-child(2) {
    left: 25px;
  }
  .todoPriority__container > span:nth-child(3) {
    left: 50px;
  }

  .todoPriority__container > span:nth-child(4) {
    left: 75px;
  }

  .todoPriority__container > span:nth-child(5) {
    left: 100px;
  }
`;

const LinksIcon = styled.div`
  font-size: 20px;
  margin: 0;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-weight: normal;
`;

const LinksIcons = styled.div`
  display: flex;
`;

const LinksItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  width: 80%;
`;

const LinksTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: normal;
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
  justify-content: space-between;
`;

const ModulesIconDone = styled.button`
  font-size: 20px;
  margin: 0;
  color: black;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-weight: normal;
`;

const ModulesIcon = styled.div`
  font-size: 20px;
  margin: 0;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-weight: normal;
`;

const ModulesIcons = styled.div`
  display: flex;
`;

const ModulesName = styled.h4`
  font-size: 20px;
  margin: 0;
  color: black;
  font-weight: normal;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  font-style: ${(props) => (props.done ? "italic" : "normal")};
`;

const ModulesItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #009688;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const ModulesList = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const ModulesTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: normal;
  width: 30%;
  display: flex;
  align-items: center;
`;

const Modules = styled.div`
  display: flex;
  margin-bottom: 30px;
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

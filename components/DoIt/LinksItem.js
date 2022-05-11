import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

import { FiCodesandbox } from "react-icons/fi";
import { BiColorFill } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function LinksItem() {
  let [editMode, setEditMode] = useState(true);
  let [linkColor, setLinkColor] = useState("rgb(103, 58, 183)");
  let colors = [
    "rgb(235, 19, 19)",
    "rgb(233, 30, 99)",
    "rgb(103, 58, 183)",
    "rgb(0, 150, 136)",
    "rgb(76, 175, 80)",
  ];
  return (
    <Container color={linkColor}>
      <Icons>
        <Icon>
          <FiCodesandbox />
        </Icon>
        <IconColor>
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
        </IconColor>
      </Icons>
      <Btn>
        Try with{" "}
        <Link href='https://codesandbox.io/s/github/Denso10911/DoIT'>
          <a style={{ color: "white", fontWeight: "bold" }} target='_blank'>
            CodeSandBox
          </a>
        </Link>
      </Btn>
    </Container>
  );
}

const Btn = styled.div`
  color: black;
`;

const IconColor = styled.div`
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

const Icon = styled.div`
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

const Icons = styled.div`
  display: flex;
`;

const Container = styled.div`
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

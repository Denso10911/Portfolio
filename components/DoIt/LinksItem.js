import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import { FiCodesandbox } from "@react-icons/all-files/fi/FiCodesandbox";
import { BiColorFill } from "@react-icons/all-files/bi/BiColorFill";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const containerVariants = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.3,
    },
  },
  exit: {
    x: -200,
    opacity: 0,
    transition: {
      delay: 0.4,
    },
  },
};

const colorsVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.1,
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

const colorVariants = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -200,
    opacity: 0,
  },
};

const onlyColorsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
  /* <------------------> use it for swich off delayChildren in colorsVariants*/
  let [firstColorsAnime, setFirstColorsAnime] = useState(true);
  useEffect(() => {
    setFirstColorsAnime(false);
  }, []);
  /* <------------------>*/

  return (
    <Container
      color={linkColor}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Icons>
        <Icon>
          <FiCodesandbox />
        </Icon>
        <IconColor>
          {!editMode && (
            <motion.button
              onClick={() => {
                setEditMode(!editMode);
              }}
              className='links__btn'
              initial={{ opacity: 0, display: "none" }}
              animate={{ opacity: 1, display: "flex" }}
              transition={{ delay: 0.9 }}
            >
              <BiColorFill />
            </motion.button>
          )}
          <AnimatePresence exitBeforeEnter>
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

                <motion.div
                  className='todoPriority__container'
                  variants={
                    firstColorsAnime ? colorsVariants : onlyColorsVariants
                  }
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                >
                  {colors.map((e, index) => {
                    return (
                      <motion.span
                        onClick={() => {
                          setLinkColor(e);
                          setEditMode(false);
                        }}
                        className='link__colors'
                        key={index}
                        style={{ backgroundColor: `${e}` }}
                        variants={colorVariants}
                      ></motion.span>
                    );
                  })}
                </motion.div>
              </>
            )}
          </AnimatePresence>
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
    display: block;
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

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  width: 90%;
`;

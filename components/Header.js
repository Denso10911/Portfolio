import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";

const social = [
  {
    link: "https://www.facebook.com/denis.gerasimov.754",
    icon: <FiFacebook />,
  },
  {
    link: "https://github.com/Denso10911",
    icon: <FiGithub />,
  },
  {
    link: "https://www.linkedin.com/in/densy-herasymov-720abb227/",
    icon: <FiLinkedin />,
  },
];

const navigation = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/projects", title: "Projects" },
];

export default function Header({ navbarOpen, setNavbarOpen }) {
  const router = useRouter();

  let navIndex = navigation.findIndex((el) => el.link === router.asPath);
  const [selectedNav, setSelectedNav] = useState(navigation[navIndex]);

  const handelItemClick = (item) => {
    setSelectedNav(item);
    setNavbarOpen(!navbarOpen);
  };

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <HeaderTopLine route={router.pathname}>
      <List>
        {social.map((item, index) => {
          return (
            <Item key={index}>
              <ItemLink
                href={item.link}
                target='_blank'
                route={router.pathname}
                className='social__links'
              >
                {item.icon}
              </ItemLink>
            </Item>
          );
        })}
      </List>

      <BurgerIcon onClick={handleClick}>
        {navbarOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </BurgerIcon>

      <List className={`navigation ${navbarOpen ? "navigetion__show" : ""}`}>
        {navigation.map((item, index) => (
          <Item
            key={index}
            className={item === selectedNav ? "selected" : ""}
            onClick={() => handelItemClick(item)}
            route={router.pathname}
          >
            <Link href={`${item.link}`}>
              <ItemLink route={router.pathname}>{item.title}</ItemLink>
            </Link>
            {item === selectedNav ? (
              <motion.div
                className='header__underline'
                layoutId='header__underline'
              />
            ) : null}
          </Item>
        ))}
      </List>
    </HeaderTopLine>
  );
}

const mainColor = "rgb(60, 1, 107)";

const BurgerIcon = styled.button`
  display: none;
  font-size: 30px;
  z-index: 2;
  border: none;
  background-color: inherit;
  color: ${(props) => {
    switch (props.route) {
      case "/projects/DoIt":
        return "#009688";
      case "/projects/GetWeather":
        return "white";
      default:
        return mainColor;
    }
  }};
  @media (max-width: 600px) {
    display: block;
  }
`;

const HeaderTopLine = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  margin: 0 auto;
  padding: 0 60px;
  position: absolute;
  background-color: inherit;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 600px) {
    padding: 0 20px;
    position: static;
  }
`;

const List = styled.ul`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 10px 0 0;
  &.navigation {
    @media (max-width: 600px) {
      display: none;
      &.navigetion__show {
        display: flex;
        flex-direction: column;
        right: 0;
        top: 0;
        bottom: 0;
        align-items: flex-end;
        padding: 45px 20px 0;
        position: absolute;
        width: 150px;
        background-color: #5600ff54;
      }
    }
  }
`;

const ItemLink = styled.a`
  color: ${(props) => {
    switch (props.route) {
      case "/projects/DoIt":
        return "#009688";
      case "/projects/GetWeather":
        return "white";
      default:
        return mainColor;
    }
  }};
`;

const Item = styled(motion.li)`
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  :hover {
    transform: scale(1.1);
  }
  .header__underline {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${(props) => {
      switch (props.route) {
        case "/projects/DoIt":
          return "#009688";
        case "/projects/GetWeather":
          return "white";
        default:
          return mainColor;
      }
    }};
  }
  a {
    display: block;
    padding-bottom: 5px;
    position: relative;
    font-size: 30px;
    line-height: 30px;
    transition: all 0.3s ease;
    @media (max-width: 375px) {
      font-size: 25px;
    }
  }
`;

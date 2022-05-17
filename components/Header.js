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
    setNavbarOpen(false);
  };

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <HeaderTopLine route={router.pathname}>
      <List className='social'>
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

      <List className={`navigation ${navbarOpen ? "navigation__show" : ""}`}>
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
            {item === selectedNav && !navbarOpen ? (
              <motion.div
                className='header__underline'
                layoutId='header__underline'
              />
            ) : null}
          </Item>
        ))}
      </List>
      <BurgerIcon
        onClick={handleClick}
        route={router.pathname}
        className='burger'
      >
        {navbarOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </BurgerIcon>
    </HeaderTopLine>
  );
}

const mainColor = "rgb(60, 1, 107)";

const BurgerIcon = styled.button`
  display: none;
  font-size: 30px;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
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
  align-items: center;
  width: 100%;
  height: 55px;
  margin: 0 auto;
  padding: 0 60px;
  position: absolute;
  background-color: inherit;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 10px 0 0;
  &.navigation {
    @media (max-width: 600px) {
      display: none;
      &.navigation__show {
        position: absolute;
        top: 55px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-around;
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

import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
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

export default function Header() {
  const router = useRouter();

  let navIndex = navigation.findIndex((el) => el.link === router.asPath);
  const [selectedNav, setSelectedNav] = useState(navigation[navIndex]);

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
              >
                {item.icon}
              </ItemLink>
            </Item>
          );
        })}
      </List>

      <List>
        {navigation.map((item, index) => (
          <Item
            key={index}
            className={item === selectedNav ? "selected" : ""}
            onClick={() => setSelectedNav(item)}
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

const HeaderTopLine = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  width: 100%;
  height: 55px;
  margin: 0 auto;
  padding: 0 60px;
  position: absolute;
  background-color: ${(props) => {
    switch (props.route) {
      case "/projects/DoIt":
        return "inherit";
      case "/projects/GetWeather":
        return "black";
      default:
        return "white";
    }
  }};
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
    background: rgb(60, 1, 107);
  }
  a {
    display: block;
    padding-bottom: 5px;
    position: relative;
    font-size: 30px;
    line-height: 30px;
    transition: all 0.3s ease;
  }
`;

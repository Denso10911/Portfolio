import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Header() {
  const router = useRouter();
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

  const variants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };
  return (
    <HeaderTopLine
      route={router.pathname}
      initial='hidden'
      animate='visible'
      variants={variants}
    >
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
        {navigation.map((item, index) => {
          return (
            <Item key={index} route={router.pathname}>
              <Link href={`${item.link}`}>
                <ItemLink
                  className={router.asPath === `${item.link}` ? "active" : ""}
                  route={router.pathname}
                >
                  {item.title}
                </ItemLink>
              </Link>
            </Item>
          );
        })}
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
  :before {
    content: "";
    position: absolute;
    width: 90%;
    border: 1px solid
      ${(props) => {
        switch (props.route) {
          case "/projects/DoIt":
            return "#009688;";
          case "/projects/GetWeather":
            return "white";
          default:
            return mainColor;
        }
      }};
    bottom: -10px;
    left: calc((100% - 90%) / 2);
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
`;

const ItemLink = styled.a`
  color: ${(props) => {
    switch (props.route) {
      case "/projects/DoIt":
        return "#009688;";
      case "/projects/GetWeather":
        return "white";
      default:
        return mainColor;
    }
  }};
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  a {
    display: block;
    padding-bottom: 5px;
    position: relative;
    font-size: 30px;
    line-height: 30px;
    transition: all 0.3s ease;
    :hover {
      text-shadow: 0 0 3px
        ${(props) => {
          switch (props.route) {
            case "/projects/DoIt":
              return "#009688;";
            case "/projects/GetWeather":
              return "white";
            default:
              return "rgb(44, 1, 79)";
          }
        }};
    }
  }
`;

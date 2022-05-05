import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

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

  return (
    <HeaderTopLine>
      <List>
        {social.map((item, index) => {
          return (
            <Item key={index}>
              <a href={item.link} target='_blank'>
                {item.icon}
              </a>
            </Item>
          );
        })}
      </List>
      <nav>
        <List>
          <Item>
            <Link href={"/"}>
              <a className={router.asPath === "/" ? "active" : ""}>Home</a>
            </Link>
          </Item>
          <Item>
            <Link href={"/about"}>
              <a className={router.asPath === "/about" ? "active" : ""}>
                About
              </a>
            </Link>
          </Item>
          <Item>
            <Link href={"/projects"}>
              <a className={router.asPath === "/projects" ? "active" : ""}>
                Projects
              </a>
            </Link>
          </Item>
        </List>
      </nav>
    </HeaderTopLine>
  );
}

const HeaderTopLine = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  width: 80%;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    border: 1px solid rgb(60, 1, 107);
    bottom: 0;
    left: 0;
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

const Item = styled.li`
  a {
    display: block;
    padding-bottom: 5px;
    position: relative;
    transition: all 0.3s ease;
    :before {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      opacity: 0;
      border: 1px solid white;
      transition: all 0.3s ease;
    }
    :hover {
      text-shadow: 0 0 3px rgb(44, 1, 79);
      :before {
        opacity: 1;
      }
    }
  }
`;

import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

import style from "../styles/Header.module.scss";
import ActiveLink from "./ActiveLink";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.contacts}>
        <ul className={style.list}>
          <li className={style.item}>
            <a
              href='https://www.facebook.com/denis.gerasimov.754'
              target='_blank'
            >
              <FiFacebook />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://github.com/Denso10911' target='_blank'>
              <FiGithub />
            </a>
          </li>
          <li className={style.item}>
            <a
              href='https://www.linkedin.com/in/densy-herasymov-720abb227/'
              target='_blank'
            >
              <FiLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <nav className={style.navigation}>
        <ul className={style.list}>
          <li className={style.item}>
            <ActiveLink href={"/"}>Home</ActiveLink>
          </li>
          <li className={style.item}>
            <ActiveLink href={"/about"}>About</ActiveLink>
          </li>
          <li className={style.item}>
            <ActiveLink href={"/projects"}>Projects</ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

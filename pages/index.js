import Link from "next/link";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>
        Hi, I'm <span>Denys</span> <br />
        I'm a front-end developer
      </h1>
      <Link href='/projects'>
        <a className={styles.btn}>View my works</a>
      </Link>
    </main>
  );
}

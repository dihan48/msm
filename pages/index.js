import Head from "next/head";
import { Header } from "../components/header";
import { Section1 } from "../components/Section1";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marketing Services Marketplace</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

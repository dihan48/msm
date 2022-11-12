import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Section1 } from "../components/Section1";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";
import { Section4 } from "../components/Section4";
import { Section5 } from "../components/Section5";
import { Section6 } from "../components/Section6";
import { Section7 } from "../components/Section7";
import { Section8 } from "../components/Section8";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marketing Services Marketplace</title>
        <meta name="description" content="" />
        <meta name="viewport" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>
      <Footer />
    </div>
  );
}

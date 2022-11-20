import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Section1 } from "../components/section1";
import { Section2 } from "../components/section2";
import { Section3 } from "../components/section3";
import { Section4 } from "../components/section4";
import { Section5 } from "../components/section5";
import { Section6 } from "../components/section6";
import { Section7 } from "../components/section7";
import { Section8 } from "../components/section8";

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marketing Services Marketplace</title>
        <meta name="description" content="" />
        <link rel="manifest" href="/site.webmanifest" />
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

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
        <meta name="yandex-verification" content="1e29adefbb0a902c" />
        <meta
          name="description"
          content="Продающий дизайн и инфографика для Wildberries и Ozon, Aliexpress. Создадим уникальные карточки с защитой от копирования конкурентов. Оцени качество или мы вернем деньги"
        />
        <meta
          name="keywords"
          content="заказать продающий дизайн карточек, инфографика, ozon, wildberries, озон, вайлдбериз"
        />
        <title>
          {" "}
          Инфографика для маркетплейсов | Дизайн карточек товара для
          Wildberries, Ozon, Aliexpress | Marketing Services for Marketplace{" "}
        </title>
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

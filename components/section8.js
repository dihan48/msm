import Image from "next/image";
import { Element } from "react-scroll";
import styles from "../styles/section8.module.css";

export function Section8() {
  return (
    <Element name="section8">
      <section className={styles.container}>
        <div className={styles.bg1}>
          <a href="https://t.me/scrooge_tg" target="_blank" rel="noreferrer">
            <Image
              src={require("../public/Group4.svg")}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              quality={100}
            />
          </a>
        </div>
        <div className={styles.bg2}>
          <Image
            src={require("../public/r11.svg")}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            quality={100}
          />
        </div>
        <div className={styles.bg3}>
          <Image
            src={require("../public/do.png")}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            quality={100}
          />
        </div>
        <div className={styles.bg4}>
          <Image
            src={require("../public/posle.png")}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            quality={100}
          />
        </div>
      </section>
    </Element>
  );
}

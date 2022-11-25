import Image from "next/image";
import { Element } from "react-scroll";

import styles from "../styles/section5.module.css";

export function Section5() {
  return (
    <Element name="section5">
      <div className={styles.container}>
        <h1 className={styles.title}>Результат</h1>
        <Image
          src={require("../public/5/Group57_2.svg")}
          alt=""
          width={954}
          height={954}
          className={styles.bg3}
        />
        <Image
          src={require("../public/5/Group57.png")}
          alt=""
          width={413}
          height={545}
          className={styles.bg2}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          placeholder="blur"
        />
        <Image
          src={require("../public/5/Group8.png")}
          alt=""
          width={190}
          height={395}
          className={styles.bg1}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          placeholder="blur"
        />
        <Image
          src={require("../public/5/Group9.png")}
          alt=""
          width={366}
          height={179}
          className={styles.bg4}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          placeholder="blur"
        />
        <Image
          src={require("../public/5/Group56.png")}
          alt=""
          width={251}
          height={106}
          className={styles.bg5}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          placeholder="blur"
        />
        <Image
          src={require("../public/5/Arrow1.svg")}
          alt=""
          width={113}
          height={96}
          className={styles.bg6}
        />
      </div>
    </Element>
  );
}

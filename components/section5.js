import Image from "next/image";
import { Element } from "react-scroll";
import styles from "../styles/section5.module.css";

export function Section5() {
  return (
    <Element name="section5">
      <div className={styles.container}>
        <h1 className={styles.title}>Результат</h1>
        <Image
          src={require("../public/Group8.png")}
          alt=""
          width={190}
          height={395}
          className={styles.bg1}
          quality={100}
        />
        <Image
          src={require("../public/Group57_2.svg")}
          alt=""
          width={954}
          height={954}
          className={styles.bg3}
          quality={100}
        />
        <Image
          src={require("../public/Group57.png")}
          alt=""
          width={413}
          height={545}
          className={styles.bg2}
          quality={100}
        />
        <Image
          src={require("../public/Group9.png")}
          alt=""
          width={366}
          height={179}
          className={styles.bg4}
          quality={100}
        />
        <Image
          src={require("../public/Group56.png")}
          alt=""
          width={251}
          height={106}
          className={styles.bg5}
          quality={100}
        />
        <Image
          src={require("../public/Arrow1.svg")}
          alt=""
          width={113}
          height={96}
          className={styles.bg6}
          quality={100}
        />
      </div>
    </Element>
  );
}

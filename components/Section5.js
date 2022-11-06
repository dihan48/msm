import Image from "next/image";
import styles from "../styles/Section5.module.css";

export function Section5() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Результат</h1>
      <Image
        src={"/Group8.svg"}
        alt=""
        width={190}
        height={395}
        className={styles.bg1}
      />
      <Image
        src={"/Group57_1.svg"}
        alt=""
        width={413}
        height={545}
        className={styles.bg2}
      />
      <Image
        src={"/Group57_2.svg"}
        alt=""
        width={954}
        height={954}
        className={styles.bg3}
      />
      <Image
        src={"/Group9.svg"}
        alt=""
        width={366}
        height={179}
        className={styles.bg4}
      />
      <Image
        src={"/Group56.svg"}
        alt=""
        width={251}
        height={106}
        className={styles.bg5}
      />
      <Image
        src={"/Arrow1.svg"}
        alt=""
        width={113}
        height={96}
        className={styles.bg6}
      />
    </div>
  );
}

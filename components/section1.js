import Image from "next/image";
import { Element, Link as ScrollLink } from "react-scroll";
import styles from "../styles/section1.module.css";

export function Section1() {
  return (
    <Element name="section1" id="main">
      <section className={styles.container}>
        <Image
          src={require("../public/1/section1_fon.png")}
          alt=""
          width={2996}
          height={2516}
          sizes="100vw"
          placeholder="blur"
          className={styles.fon}
        />
        <div className={styles.bg}>
          <Image
            className={styles.bg2}
            src={require("../public/1/a09c9ada179ed532598fa65b9967ad9e.png")}
            alt=""
            width={640}
            height={640}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            placeholder="blur"
            priority
          />
          <Image
            className={styles.bg_card}
            src={require("../public/1/6be0c8fb42af59ebfa095b9c2aeee72a.png")}
            alt=""
            width={279}
            height={522}
            sizes="100vw"
            placeholder="blur"
            priority
          />
          <Image
            className={styles.bg1}
            src={require("../public/1/a09c9ada179ed532598fa65b9967ad9e.png")}
            alt=""
            width={640}
            height={640}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            placeholder="blur"
            priority
          />
          <Image
            className={styles.bg_text}
            src={require("../public/1/Group51.svg")}
            alt=""
            width={226}
            height={232}
            priority
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Продающие карточки для маркетплейсов</h1>
          <div className={styles.marketplaces}>
            <h2 className={styles.marketplace1}>Wildberries</h2>
            <h2 className={styles.marketplace2}>Ozon</h2>
          </div>
          <h4 className={styles.text}>
            Создаем стильные карточки товаров, способные{" "}
            <b className={styles.text_bold}>кратно увеличить продажи</b>
          </h4>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.feature_value}>300+</div>
              <div className={styles.feature_text}>выполненных карточек</div>
            </div>
            <div className={styles.feature}>
              <div className={styles.feature_value}>20</div>
              <div className={styles.feature_text}>разных категорий</div>
            </div>
            <ScrollLink
              href="#portfolio"
              to={"section3"}
              smooth={true}
              duration={500}
              className={styles.button1_wrapper}
            >
              <button className={styles.button1}>Смотреть портфолио</button>
            </ScrollLink>
            <a
              href="https://t.me/scrooge_tg"
              target="_blank"
              rel="noreferrer"
              className={styles.button2_wrapper}
            >
              <button className={styles.button2}>Заказать в telegram</button>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
}

import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info_container}>
          <div className={styles.logo} />
          <div className={styles.info}>
            <div>Маркетинговое агенство</div>
            <div>ИП ИГЛИН АНТОН ПЕТРОВИЧ</div>
            <div>ИНН 231222224400</div>
            <div>ОГРН 322237500004779</div>
          </div>
          <div className={styles.copyright}>© MSM.STORE 2022</div>
        </div>
        <div className={styles.links_container}>
          <ScrollLink
            href="#main"
            to={"section1"}
            smooth={true}
            duration={500}
            className={styles.link}
          >
            Главная
          </ScrollLink>
          <ScrollLink
            href="#portfolio"
            to={"section3"}
            smooth={true}
            duration={500}
            className={styles.link}
          >
            Портфолио
          </ScrollLink>
          <ScrollLink
            href="#advantage"
            to={"section4"}
            smooth={true}
            duration={500}
            className={styles.link}
          >
            Преимущества
          </ScrollLink>
          <ScrollLink
            href="#price"
            to={"section6"}
            smooth={true}
            duration={500}
            className={styles.link}
          >
            Цена
          </ScrollLink>
          <ScrollLink
            href="#reviews"
            to={"section7"}
            smooth={true}
            duration={500}
            className={styles.link}
          >
            Отзывы
          </ScrollLink>
        </div>
        <div className={styles.socials_container}>
          <a
            href="https://t.me/msm_agent"
            target="_blank"
            rel="noreferrer"
            className={styles.tg_link}
          />
          <a
            href="https://vk.com/msm_wb"
            target="_blank"
            rel="noreferrer"
            className={styles.vk_link}
          />
          <h1 className={styles.title}>
            <div className={styles.title_word}>Marketing</div>
            <div className={styles.title_word}>Services</div>
            <div className={styles.title_word}>Marketplace</div>
          </h1>
        </div>
      </div>
    </footer>
  );
}

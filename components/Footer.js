import styles from "../styles/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info_container}>
          <div className={styles.logo} />
          <div className={styles.info}>
            Маркетинговое агенство
            <br />
            ИП ИГЛИН АНТОН ПЕТРОВИЧ
            <br />
            ИНН 231222224400
            <br />
            ОГРН 322237500004779
          </div>
          <div className={styles.copyright}>© MSM.STORE 2022</div>
        </div>
        <div className={styles.links_container}>
          <a href="#" className={styles.link}>
            Главная
          </a>
          <a href="#" className={styles.link}>
            Портфолио
          </a>
          <a href="#" className={styles.link}>
            Преимущества
          </a>
          <a href="#" className={styles.link}>
            Цена
          </a>
          <a href="#" className={styles.link}>
            Отзывы
          </a>
        </div>
        <div className={styles.socials_container}>
          <a href="#" className={styles.tg_link} />
          <a href="#" className={styles.vk_link} />
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

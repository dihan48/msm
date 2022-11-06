import Image from "next/image";
import styles from "../styles/Section4.module.css";

export function Section4() {
  return (
    <section className={styles.container}>
      <Image
        src={"/bg4_1.png"}
        alt=""
        width={414}
        height={325}
        className={styles.bg1}
      />
      <Image
        src={"/bg4_2.png"}
        alt=""
        width={172}
        height={182}
        className={styles.bg2}
      />
      <h1 className={styles.title}>
        Этапы <span className={styles.title_colored}>работы</span>
      </h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.card_number}>01</div>
          <h2 className={styles.card_title}>Общение с клиентом</h2>
          <div className={styles.card_content1}>
            <p className={styles.card_text}>
              Сбор информации, необходимой для начала работы.
            </p>
            <p className={styles.card_text}>
              <span className={styles.card_text_highlight}>
                Изучаем вашу задачу
              </span>
              <br /> и сведения о товаре
            </p>
            <p className={styles.card_text}>
              Озвучиваем сроки реализации и реквизиты для оплаты
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_number}>02</div>
          <h2 className={styles.card_title}>Анализ конкурентов</h2>
          <div className={styles.card_content2}>
            <p className={styles.card_text}>
              Проводим комплексный
              <br />
              <span className={styles.card_text_highlight}>
                анализ ниши и конкурентов
              </span>
            </p>
            <p className={styles.card_text}>
              <span className={styles.card_text_highlight}>
                Выделяем сильные стороны товара
              </span>
              , <br />
              на которые следует обратить внимание потенциальных покупателей
            </p>
            <p className={styles.card_text}>
              На основании полученных данных
              <br />
              <span className={styles.card_text_highlight}>
                создаем стильный дизайн
              </span>
              ,
              <br />
              который{" "}
              <span className={styles.card_text_highlight}>
                привлекает внимание
              </span>{" "}
              покупателя
              <br />и{" "}
              <span className={styles.card_text_highlight}>
                выгодно выделяет ваш товар
              </span>{" "}
              <br />
              на фоне карточек конкурентов
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_number}>03</div>
          <h2 className={styles.card_title}>Утверждение и сдача</h2>
          <div className={styles.card_content3}>
            <p className={styles.card_text}>
              <span className={styles.card_text_highlight}>
                После выполнения карточка презентуется заказчику
              </span>
            </p>
            <p className={styles.card_text}>
              <span className={styles.card_text_highlight}>
                Если дизайн нравиться
              </span>
              <br />и устраивает клиента - отправляем архив с файлами проекта
            </p>
            <p className={styles.card_text}>
              <span className={styles.card_text_highlight}>
                Если дизайн не подходит
              </span>
              <br />и нужны правки - выясняем, что именно нужно изменить и
              дорабатываем
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

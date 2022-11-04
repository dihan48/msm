import styles from "../styles/Section4.module.css";

export function Section4() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Этапы <span className={styles.title_colored}>работы</span>
      </h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2 className={styles.card_title}>Общение с клиентом</h2>
          <div className={styles.card_content1}>
            <p className={styles.card_text}>
              Сбор информации, необходимой для начала работы.
            </p>
            <p className={styles.card_text}>
              Изучаем вашу задачу
              <br /> и сведения о товаре
            </p>
            <p className={styles.card_text}>
              Озвучиваем сроки реализации и реквизиты для оплаты
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h2 className={styles.card_title}>Анализ конкурентов</h2>
          <div className={styles.card_content2}>
            <p className={styles.card_text}>
              Проводим комплексный
              <br />
              анализ ниши и конкурентов
            </p>
            <p className={styles.card_text}>
              Выделяем сильные стороны товара, <br />
              на которые следует обратить внимание потенциальных покупателей
            </p>
            <p className={styles.card_text}>
              На основании полученных данных
              <br />
              создаем стильный дизайн,
              <br />
              который привлекает внимание покупателя
              <br />и выгодно выделяет ваш товар <br />
              на фоне карточек конкурентов
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h2 className={styles.card_title}>Утверждение и сдача</h2>
          <div className={styles.card_content3}>
            <p className={styles.card_text}>
              После выполнения карточка презентуется заказчику
            </p>
            <p className={styles.card_text}>
              Если дизайн нравиться
              <br />и устраивает клиента - отправляем архив с файлами проекта
            </p>
            <p className={styles.card_text}>
              Если дизайн не подходит
              <br />и нужны правки - выясняем, что именно нужно изменить и
              дорабатываем
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Element } from "react-scroll";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/section7.module.css";

const slider = [
  require("../public/7/review1.png"),
  require("../public/7/review2.png"),
  require("../public/7/review3.png"),
];

export function Section7() {
  return (
    <Element name="section7" id="reviews">
      <section className={styles.container}>
        <div className={styles.text_container}>
          <h1 className={styles.title}>Отзывы</h1>
          <div className={styles.subtitle}>о работе с нами</div>
          <div className={styles.description}>
            Живые и яркие слова благодрности вдохновляют трудится еще лучше!
          </div>
        </div>
        <div className={styles.slider_container}>
          <Image
            src={require("../public/7/image21.png")}
            alt=""
            width={740}
            height={740}
            className={styles.bg1}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            placeholder="blur"
          />
          <div className={styles.slider}>
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              slide={false}
              arrows={true}
              fade={true}
              nextArrow={<SampleNextArrow />}
              prevArrow={<SamplePrevArrow />}
            >
              {slider.map((url, index) => (
                <div key={index} className={styles.slide_container}>
                  <div className={styles.slide}>
                    <Image
                      src={url}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      placeholder="blur"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Element>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={styles.arrow_right} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={styles.arrow_left} onClick={onClick} />;
}

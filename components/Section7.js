import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/section7.module.css";
import Image from "next/image";

const slider = [
  require("../public/review1.png"),
  require("../public/review2.png"),
  require("../public/review3.png"),
];

export function Section7() {
  return (
    <section className={styles.container}>
      <div className={styles.text_container}>
        <h1 className={styles.title}>Отзывы</h1>
        <div className={styles.subtitle}>о работе с нами</div>
        <div className={styles.description}>
          Живые и яркие слова благодрности вдохновляют трудится еще лучше!
        </div>
      </div>
      <div className={styles.slider_container}>
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    quality={100}
                    placeholder="blur"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
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

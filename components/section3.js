import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/section3.module.css";

const slider = [
  require("../public/1/image 7.png"),
  require("../public/1/image 8.png"),
  require("../public/1/image 9.png"),
  require("../public/1/image 10.png"),
  require("../public/1/image 11.png"),

  require("../public/2/image 7.png"),
  require("../public/2/image 8.png"),
  require("../public/2/image 9.png"),
  require("../public/2/image 10.png"),
  require("../public/2/image 11.png"),

  require("../public/3/image 7.png"),
  require("../public/3/image 8.png"),
  require("../public/3/image 9.png"),
  require("../public/3/image 10.png"),
  require("../public/3/image 11.png"),

  require("../public/4/image 7.png"),
  require("../public/4/image 8.png"),
  require("../public/4/image 9.png"),
  require("../public/4/image 10.png"),
  require("../public/4/image 11.png"),

  require("../public/5/image 7.png"),
  require("../public/5/image 8.png"),
  require("../public/5/image 9.png"),
  require("../public/5/image 10.png"),
  require("../public/5/image 11.png"),
];

export function Section3() {
  const paginationRef = useRef();
  return (
    <div className={styles.bg_container}>
      <Image
        src={require("../public/b91a8f8aba2979ab6e80fa1ec9fad2ad-min (1).png")}
        alt=""
        width={94}
        height={94}
        className={styles.bg1}
        quality={100}
        placeholder="blur"
      />
      <Image
        src={require("../public/b91a8f8aba2979ab6e80fa1ec9fad2ad-min (1).png")}
        alt=""
        width={68}
        height={68}
        className={styles.bg2}
        quality={100}
        placeholder="blur"
      />
      <Image
        src={require("../public/b91a8f8aba2979ab6e80fa1ec9fad2ad-min (1).png")}
        alt=""
        width={80}
        height={80}
        className={styles.bg3}
        quality={100}
        placeholder="blur"
      />
      <Image
        src={require("../public/4510133a6f9c014534b9b84fd6197fec.png")}
        alt=""
        width={352}
        height={352}
        className={styles.bg4}
        quality={100}
        placeholder="blur"
      />
      <section className={styles.container}>
        <h1 className={styles.title}>Портфолио</h1>
        <div className={styles.slider_container}>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={5}
            slidesToScroll={5}
            arrows={false}
            slide={false}
            appendDots={(dots) => (
              <div>
                <ul className={styles.bullets}>{dots}</ul>
              </div>
            )}
            customPaging={(i) => <div className={styles.bullet} />}
          >
            {slider.map((url, index) => (
              <div key={index} className={styles.slide_container}>
                <div className={styles.slide}>
                  <Image
                    src={url}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 20vw"
                    quality={100}
                    placeholder="blur"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div ref={paginationRef} className={styles.pagination} />
        <button className={styles.button}>Смотреть все работы</button>
      </section>
    </div>
  );
}

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";

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
  const [swiper, setSwiper] = useState();
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
          <Swiper
            onSwiper={setSwiper}
            className={styles.slider}
            spaceBetween={8}
            slidesPerView="auto"
            centeredSlides={true}
            breakpoints={{
              979: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
                centeredSlides: true,
              },
              980: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                centeredSlides: false,
              },
            }}
          >
            {Array.isArray(slider) &&
              slider.map((url, index) => (
                <SwiperSlide key={index} className={styles.slide_container}>
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
                </SwiperSlide>
              ))}
          </Swiper>
          <SwiperPagination swiper={swiper} />
        </div>
        <div ref={paginationRef} className={styles.pagination} />
        <button className={styles.button}>Смотреть все работы</button>
      </section>
    </div>
  );
}

/*
магические числа работают для 5 точке, смещение 1 точки 20px
*/
function getDotsOffset(dotsCount, currentDot) {
  if (dotsCount > 5 && currentDot > 2) {
    if (currentDot > dotsCount - 4) {
      return (dotsCount - 5) * 23;
    }
    return (currentDot - 2) * 23;
  }
  return 0;
}

function SwiperPagination({ swiper }) {
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiper) {
      const slideChangeHandle = function () {
        setSlides(swiper.snapGrid);
        setActiveIndex(swiper.snapIndex);
        console.log(swiper);
      };
      slideChangeHandle();
      swiper.on("slideChange", slideChangeHandle);
      return () => swiper.off("slideChange", slideChangeHandle);
    }
  }, [swiper]);

  return (
    <>
      <div className={styles.dots_container}>
        <div
          className={styles.dots}
          style={{
            left: `-${getDotsOffset(slides?.length, activeIndex)}px`,
          }}
        >
          {slides?.map((child, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                swiper.snapIndex === index ? styles.active : ""
              }`}
              onClick={() => {
                swiper.slideTo(index * swiper.params.slidesPerGroup);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

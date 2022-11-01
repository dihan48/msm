import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
// import "swiper/css/pagination";

import styles from "../styles/Section3.module.css";

const slider = [
  "/s1.png",
  "/s2.png",
  "/s3.png",
  "/s4.png",
  "/s5.png",

  "/s1.png",
  "/s1.png",
  "/s1.png",
  "/s1.png",
  "/s1.png",

  "/s2.png",
  "/s2.png",
  "/s2.png",
  "/s2.png",
  "/s2.png",

  "/s3.png",
  "/s3.png",
  "/s3.png",
  "/s3.png",
  "/s3.png",

  "/s4.png",
  "/s4.png",
  "/s4.png",
  "/s4.png",
  "/s4.png",
];

export function Section3() {
  return (
    <div className={styles.bg_container}>
      <Image
        src={"/b91a8f8aba2979ab6e80fa1ec9fad2ad-min (1).png"}
        alt=""
        width={94}
        height={94}
        className={styles.bg1}
      />
      <Image
        src={"/b91a8f8aba2979ab6e80fa1ec9fad2ad-min (1).png"}
        alt=""
        width={68}
        height={68}
        className={styles.bg2}
      />
      <Image
        src={"/b91a8f8aba2979ab6e80fa1ec9fad2ad-min (1).png"}
        alt=""
        width={80}
        height={80}
        className={styles.bg3}
      />
      <section className={styles.container}>
        <h1 className={styles.title}>Портфолио</h1>
        <div className={styles.slider_container}>
          <Swiper
            slidesPerView={5}
            spaceBetween={8}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Pagination]}
            className={styles.slider}
            pagination={{
              clickable: true,
              bulletActiveClass: styles.bullet_active,
              bulletClass: styles.bullet,
              horizontalClass: styles.bullets,
              modifierClass: "",
            }}
          >
            {slider.map((url, index) => (
              <SwiperSlide key={index} className={styles.slide_container}>
                <div className={styles.slide}>
                  <Image
                    src={url}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    loading={"lazy"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

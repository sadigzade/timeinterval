import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { useAppSelector } from "../../hoooks/useHooks";
import styles from "./SwiperBlock.module.css";
import "swiper/css";

const SwiperBlock = () => {
  const currentPoint = useAppSelector((state) => state.dates.currentPoint);
  const dates = useAppSelector((state) => state.dates.dates);
  const events = dates[currentPoint - 1] ? dates[currentPoint - 1].events : [];
  const t1 = gsap.timeline();
  t1.to("#carusel", { duration: 0.3, opacity: 0 }).to("#carusel", {
    duration: 1.5,
    opacity: 1,
    delay: 0.2,
  });

  return (
    <div id={"carusel"} className={styles.Carusel}>
      <div className={styles.Controller}>
        <div className={`swiper-button-prev ${styles.ArrowPrev} ${styles.Arrow}`}>
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#3877EE" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Swiper
        spaceBetween={40}
        slidesPerView={2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          992: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        modules={[Navigation]}
        className="swiper_container"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className={styles.SwiperSlide}>
            <h3 className={styles.SlideYear}>{event.year}</h3>
            <p className="truncate-text">{event.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.Controller}>
        <div className={`swiper-button-next ${styles.ArrowNext} ${styles.Arrow}`}>
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#3877EE" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SwiperBlock;

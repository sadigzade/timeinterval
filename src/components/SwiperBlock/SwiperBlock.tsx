import { useEffect, useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { useAppSelector } from "../../hoooks/useHooks";
import styles from "./SwiperBlock.module.css";
import "swiper/css";

const SwiperBlock = () => {
  const caruselRef = useRef<HTMLDivElement>(null);
  const currentPoint = useAppSelector((state) => state.dates.currentPoint);
  const dates = useAppSelector((state) => state.dates.dates);
  const currentDate = dates[currentPoint - 1];
  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.to(caruselRef.current, { duration: 0.3, opacity: 0 }).to(caruselRef.current, {
      duration: 1.5,
      opacity: 1,
    });
  }, [timeline]);

  return (
    <div ref={caruselRef}>
      <span className={styles.BlockName}>{currentDate && currentDate.name}</span>
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
              <path
                d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                stroke="#3877EE"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={25}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            576: {
              slidesPerView: 3,
              spaceBetween: 45,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          modules={[Navigation]}
          className="swiper_container"
        >
          {currentDate &&
            currentDate.events.map((event) => (
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
              <path
                d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                stroke="#3877EE"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperBlock;

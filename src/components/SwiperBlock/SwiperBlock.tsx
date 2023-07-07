import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperBlock.module.css";
import "swiper/css";

const SwiperBlock = () => {
  return (
    <div className={styles.Carusel}>
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
        spaceBetween={80}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className={styles.SwiperSlide}>
          <h3 className={styles.SlideYear}>2015</h3>
          <p className="truncate-text">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <h3 className={styles.SlideYear}>2015</h3>
          <p className="truncate-text">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <h3 className={styles.SlideYear}>2015</h3>
          <p className="truncate-text">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <h3 className={styles.SlideYear}>2015</h3>
          <p className="truncate-text">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <h3 className={styles.SlideYear}>2015</h3>
          <p className="truncate-text">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <h3 className={styles.SlideYear}>2015</h3>
          <p className="truncate-text">
            13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
          </p>
        </SwiperSlide>
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

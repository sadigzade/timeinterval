import { useState } from "react";
import styles from "./CenterCircle.module.css";
import { useWindowSize } from "../../hoooks/useWindowSize";
import "swiper/css/navigation";

const CenterCircle = () => {
  // const [width] = useWindowSize();
  const [currentPoint, setCurrentPoint] = useState(1);
  const [circleDeg, setCircleDeg] = useState(-60);
  const [pointDeg, setPointDeg] = useState(60);

  const onPointClick = (point: number) => {
    const pointsDiff = Math.abs(currentPoint - point);

    if (pointsDiff <= Math.floor(6 / 2)) {
      if (point > currentPoint) {
        setCircleDeg(circleDeg + Math.floor(360 / 6) * pointsDiff);
        setPointDeg(pointDeg - Math.floor(360 / 6) * pointsDiff);
      } else {
        setCircleDeg(circleDeg - Math.floor(360 / 6) * pointsDiff);
        setPointDeg(pointDeg + Math.floor(360 / 6) * pointsDiff);
      }
    } else {
      if (point > currentPoint) {
        setCircleDeg(circleDeg - Math.floor(360 / 6) * (6 - pointsDiff));
        setPointDeg(pointDeg + Math.floor(360 / 6) * (6 - pointsDiff));
      } else {
        setCircleDeg(circleDeg + Math.floor(360 / 6) * (6 - pointsDiff));
        setPointDeg(pointDeg - Math.floor(360 / 6) * (6 - pointsDiff));
      }
    }

    setCurrentPoint(point);
  };

  const onPrev = () => {
    if (currentPoint === 1) return;

    setCurrentPoint(currentPoint - 1);
    setCircleDeg(circleDeg - 60);
    setPointDeg(pointDeg + 60);
  };

  const onNext = () => {
    if (currentPoint === 6) return;

    setCurrentPoint(currentPoint + 1);
    setCircleDeg(circleDeg + 60);
    setPointDeg(pointDeg - 60);
  };

  return (
    <div className={styles.CenterCircle}>
      <ul
        className={styles.CirclePoints}
        style={{
          transform: `rotate(${circleDeg}deg)`,
        }}
      >
        {new Array(6).fill(0).map((_, index) => {
          const X = (530 / 2) * (1 + Math.cos((index * (2 * Math.PI)) / 6));
          const Y = (530 / 2) * (1 - Math.sin((index * (2 * Math.PI)) / 6));

          return (
            <li
              key={index}
              className={`${styles.Point} ${currentPoint === index + 1 ? styles.active : ""}`}
              style={{
                top: Y,
                left: X,
                transform: `translate(-50%, -50%) rotate(${pointDeg}deg)`,
              }}
              onClick={() => onPointClick(index + 1)}
            >
              {index + 1}
            </li>
          );
        })}
      </ul>
      <div className={styles.CircleControl}>
        <span>0{currentPoint}/06</span>
        <div className={styles.CirlceArrows}>
          <button
            className={`${styles.CircleArrowPrev} ${currentPoint === 1 ? styles.disabled : ""}`}
            onClick={onPrev}
          >
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                stroke="#42567A"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button
            className={`${styles.CircleArrowNext} ${currentPoint === 6 ? styles.disabled : ""}`}
            onClick={onNext}
          >
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                stroke="#42567A"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterCircle;

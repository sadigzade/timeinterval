import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useAppDispatch, useAppSelector } from "../../hoooks/useHooks";
import { setCurrentPoint } from "../../services/slices/dates/datesSlice";
import CircleControl from "./CircleControl/CircleControl";
import styles from "./CenterCircle.module.css";
import "swiper/css/navigation";

const CenterCircle = () => {
  const dispatch = useAppDispatch();
  const dates = useAppSelector((state) => state.dates.dates);
  const currentPoint = useAppSelector((state) => state.dates.currentPoint);
  const startInterval = dates[currentPoint - 1] && dates[currentPoint - 1].startInterval;
  const endInterval = dates[currentPoint - 1] && dates[currentPoint - 1].endInterval;

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

    dispatch(setCurrentPoint(point));
  };

  useEffect(() => {
    gsap.timeline().from(`#point-name-${currentPoint}`, { duration: 1.5, opacity: 0, delay: 0.5 });
  }, [currentPoint]);

  return (
    <div className={styles.CenterCircle}>
      <div className={styles.Dates}>
        <span className={styles.DateBlue}>{startInterval}</span>
        <span className={styles.DatePink}>{endInterval}</span>
      </div>
      <ul
        className={styles.CirclePoints}
        style={{
          transform: `rotate(${circleDeg}deg)`,
        }}
      >
        {dates.map((date, index) => {
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
              <div className={styles.PointWrapper}>
                <span className={styles.PointValue}>{index + 1}</span>
                {date.name && (
                  <span id={`point-name-${index + 1}`} className={styles.PointName}>
                    {date.name}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <CircleControl
        circleDeg={circleDeg}
        pointDeg={pointDeg}
        setCircleDeg={setCircleDeg}
        setPointDeg={setPointDeg}
      />
    </div>
  );
};

export default CenterCircle;

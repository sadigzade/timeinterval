import CountUp from "react-countup";
import { gsap } from "gsap";
import { useAppSelector } from "../../hoooks/useHooks";
import CircleControl from "./CircleControl/CircleControl";
import styles from "./CenterCircle.module.css";
import "swiper/css/navigation";
import { useEffect } from "react";
import PointList from "./PointList/PointList";

const CenterCircle = () => {
  const dates = useAppSelector((state) => state.dates.dates);
  const currentPoint = useAppSelector((state) => state.dates.currentPoint);
  const prevInterval = useAppSelector((state) => state.dates.prevInterval);
  const startInterval = dates[currentPoint - 1] && dates[currentPoint - 1].startInterval;
  const endInterval = dates[currentPoint - 1] && dates[currentPoint - 1].endInterval;
  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.from(`#point-name-${currentPoint}`, { duration: 1.5, opacity: 0, delay: 0.5 });
  }, [currentPoint, timeline]);

  return (
    <div className={styles.CenterCircle}>
      <div className={styles.Dates}>
        <CountUp
          start={prevInterval.startInterval}
          end={startInterval}
          separator={""}
          className={styles.DateBlue}
        />
        <CountUp
          start={prevInterval.endInterval}
          end={endInterval}
          separator={""}
          className={styles.DatePink}
        />
      </div>
      <PointList />
      <div className="d-none">
        <CircleControl />
      </div>
    </div>
  );
};

export default CenterCircle;

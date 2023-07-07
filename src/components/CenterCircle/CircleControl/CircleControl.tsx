import { FC } from "react";
import styles from "./CircleControl.module.css";
import { useAppDispatch, useAppSelector } from "../../../hoooks/useHooks";
import { nextPoint, prevPoint } from "../../../services/slices/dates/datesSlice";

type CircleControlProps = {
  circleDeg: number;
  pointDeg: number;
  setCircleDeg: (deg: number) => void;
  setPointDeg: (deg: number) => void;
};

const CircleControl: FC<CircleControlProps> = ({
  circleDeg,
  pointDeg,
  setCircleDeg,
  setPointDeg,
}) => {
  const dispatch = useAppDispatch();
  const currentPoint = useAppSelector((state) => state.dates.currentPoint);
  const countDates = useAppSelector((state) => state.dates.dates).length;

  const onPrev = () => {
    if (currentPoint === 1) return;

    dispatch(prevPoint());
    setCircleDeg(circleDeg - 360 / countDates);
    setPointDeg(pointDeg + 360 / countDates);
  };

  const onNext = () => {
    if (currentPoint === 6) return;

    dispatch(nextPoint());
    setCircleDeg(circleDeg + 360 / countDates);
    setPointDeg(pointDeg - 360 / countDates);
  };

  return (
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
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
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
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CircleControl;

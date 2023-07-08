import React from "react";
import CircleControl from "../CenterCircle/CircleControl/CircleControl";
import styles from "./ControllerMobile.module.css";
import { useAppDispatch, useAppSelector } from "../../hoooks/useHooks";
import { setCurrentPoint } from "../../services/slices/dates/datesSlice";

const ControllerMobile = () => {
  const dispatch = useAppDispatch();
  const currentPoint = useAppSelector((state) => state.dates.currentPoint);
  const dates = useAppSelector((state) => state.dates.dates);

  const onSetPoint = (point: number) => {
    dispatch(setCurrentPoint(point));
  };

  return (
    <div className={styles.CircleControl}>
      <CircleControl />
      <ul className={styles.PointList}>
        {dates.map((date, index) => (
          <li
            key={date.id}
            className={`${styles.PointItem} ${currentPoint === index + 1 ? styles.Active : ""}`}
            onClick={() => onSetPoint(index + 1)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default ControllerMobile;

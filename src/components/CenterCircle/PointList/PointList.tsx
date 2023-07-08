import React from "react";
import styles from "./PointList.module.css";
import { useAppSelector } from "../../../hoooks/useHooks";
import PointItem from "./PointItem/PointItem";

const PointList = () => {
  const dates = useAppSelector((state) => state.dates.dates);
  const circleDeg = useAppSelector((state) => state.dates.circleDeg);

  return (
    <ul
      className={styles.CirclePoints}
      style={{
        transform: `rotate(${circleDeg}deg)`,
      }}
    >
      {dates.map((date, index) => {
        return <PointItem key={date.id} index={index} name={date.name} />;
      })}
    </ul>
  );
};

export default PointList;

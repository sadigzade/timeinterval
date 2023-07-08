import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hoooks/useHooks";
import {
  setCircleDeg,
  setCurrentPoint,
  setPointDeg,
} from "../../../../services/slices/dates/datesSlice";
import styles from "./PointItem.module.css";

type PointItemProps = {
  index: number;
  name: string | undefined;
};

const PointItem: FC<PointItemProps> = ({ index, name }) => {
  const dispatch = useAppDispatch();
  const currentPoint = useAppSelector((state) => state.dates.currentPoint);
  const circleDeg = useAppSelector((state) => state.dates.circleDeg);
  const pointDeg = useAppSelector((state) => state.dates.pointDeg);

  const onPointClick = (point: number) => {
    const pointsDiff = Math.abs(currentPoint - point);

    if (pointsDiff <= Math.floor(6 / 2)) {
      if (point > currentPoint) {
        dispatch(setCircleDeg(circleDeg + Math.floor(360 / 6) * pointsDiff));
        dispatch(setPointDeg(pointDeg - Math.floor(360 / 6) * pointsDiff));
      } else {
        dispatch(setCircleDeg(circleDeg - Math.floor(360 / 6) * pointsDiff));
        dispatch(setPointDeg(pointDeg + Math.floor(360 / 6) * pointsDiff));
      }
    } else {
      if (point > currentPoint) {
        dispatch(setCircleDeg(circleDeg - Math.floor(360 / 6) * (6 - pointsDiff)));
        dispatch(setPointDeg(pointDeg + Math.floor(360 / 6) * (6 - pointsDiff)));
      } else {
        dispatch(setCircleDeg(circleDeg + Math.floor(360 / 6) * (6 - pointsDiff)));
        dispatch(setPointDeg(pointDeg - Math.floor(360 / 6) * (6 - pointsDiff)));
      }
    }

    dispatch(setCurrentPoint(point));
  };

  const X = (530 / 2) * (1 + Math.cos((index * (2 * Math.PI)) / 6));
  const Y = (530 / 2) * (1 - Math.sin((index * (2 * Math.PI)) / 6));

  return (
    <li
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
        {name && (
          <span id={`point-name-${currentPoint}`} className={styles.PointName}>
            {name}
          </span>
        )}
      </div>
    </li>
  );
};

export default PointItem;

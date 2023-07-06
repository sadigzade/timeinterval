import { FC } from "react";
import styles from "./CenterCircle.module.css";

const D = 530;

type CenterCircleProps = {
  currentPoint: number;
  circleDeg: number;
  pointDeg: number;
  onPointClick: (point: number) => void;
};

const CenterCircle: FC<CenterCircleProps> = ({
  currentPoint,
  circleDeg,
  pointDeg,
  onPointClick,
}) => {
  return (
    <div className={styles.CentetCircle}>
      <ul
        className={styles.CirclePoints}
        style={{
          transform: `translate(-50%, -50%) rotate(${circleDeg}deg)`,
        }}
      >
        {new Array(6).fill(0).map((_, index) => {
          const X = (D / 2) * (1 + Math.cos((index * (2 * Math.PI)) / 6));
          const Y = (D / 2) * (1 - Math.sin((index * (2 * Math.PI)) / 6));

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
    </div>
  );
};

export default CenterCircle;

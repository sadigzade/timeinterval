import { useEffect } from "react";
import CenterCircle from "../CenterCircle/CenterCircle";
import SwiperBlock from "../SwiperBlock/SwiperBlock";
import styles from "./App.module.css";
import { useAppDispatch } from "../../hoooks/useHooks";
import { getDates } from "../../services/slices/dates/datesSlice";
import ControllerMobile from "../ControllerMobile/ControllerMobile";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDates());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={styles.App}>
        <div className={styles.Content}>
          <div className={styles.Header}>
            <h1>Исторические даты</h1>
          </div>
          <CenterCircle />
          <SwiperBlock />
          <ControllerMobile />
        </div>
      </div>
    </div>
  );
};

export default App;

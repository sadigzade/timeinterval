import CenterCircle from "../CenterCircle/CenterCircle";
import SwiperBlock from "../SwiperBlock/SwiperBlock";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className="container">
      <div className={styles.App}>
        <div className={styles.Content}>
          <div className={styles.Header}>
            <h1>Исторические даты</h1>
          </div>
          <CenterCircle />
          <SwiperBlock />
        </div>
      </div>
    </div>
  );
};

export default App;

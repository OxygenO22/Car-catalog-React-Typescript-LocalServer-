import styles from "./Smile.module.scss";
import { useState } from "react";

export const Smile = () => {
  const [leftEye, setLeftEye] = useState();
  const [rightEye, setRightEye] = useState();

  const eyeball = () => {
    document.onmousemove = (e) => { 
      let x = e.x - innerWidth / 2;
      let y = e.y - 270;
      const arcctg = (x, y) => {
        if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y); 
        if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y); 
        if (x < 0 && y < 0) return Math.PI + Math.atan(y / x); 
        if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y)); 
      };  
      setLeftEye(arcctg(x + 100, y));
      setRightEye(arcctg(x - 100, y));
    };
  };

  return (
    <div className={styles.wrapper} onMouseMove={eyeball()}>
      <div className={styles.face}>
        <div className={styles.eyes}>
          <div className={styles.eye} style={{transform: `rotate(${57.2958 * leftEye}deg)`}}></div>
          <div className={styles.eye} style={{transform: `rotate(${57.2958 * rightEye}deg)`}}></div>
        </div>
      </div>
    </div>
  );
};
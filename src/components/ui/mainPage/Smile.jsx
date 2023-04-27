import { useState } from "react";
import styles from "./Smile.module.scss";

export const Smile = () => {
  const [eye, setEye] = useState()

  function eyeball(e) {
    document.onmousemove = (e) => { 
      let x = e.x;
      let y = e.y;
      console.log(x + " " + y);
      

      const arcctg = (x, y) => {
        (x > 0 && y > 0) && Math.PI / 2 - Math.atan(x / y); 
        (x < 0 && y > 0) && Math.PI / 2 - Math.atan(x / y); 
        (x > 0 && y < 0) && Math.PI + Math.atan(y / x); 
        (x > 0 && y < 0) && 3 * Math.PI / 2 + Math.abs(Math.atan(y / x)); 
      }

      document.querySelector("#eye").style.transform = "rotate(" + 57.2958 * arcctg(x, y) + 'deg)';
    }
  }

  return (
    <div className={styles.wrapper} onMouseMove={e => eyeball(e)}>
      <div className={styles.face}>
        <div className={styles.eyes}>
          <div className={styles.eye} id="eye"  ></div>
          <div className={styles.eye} ></div>
        </div>
      </div>
    </div>
  );
}

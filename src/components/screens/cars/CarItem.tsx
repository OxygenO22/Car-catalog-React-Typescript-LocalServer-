import styles from "../home/Home.module.scss";
import { FC } from "react";

export interface car {
  name: string;
  picture: string;
  price: number;
}

interface carItemProps {
  car: car;
}

export const CarItem: FC<carItemProps> = ({ car }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image__wrapper}>
        <img className={styles.image} src={car.picture} alt="img" />
      </div>
      <div className={styles.content__wrapper}>
        <h2 className={styles.content__title}>{car.name}</h2>
        <p className={styles.content__price}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol",
            minimumFractionDigits: 0,
          }).format(car.price)}
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
};

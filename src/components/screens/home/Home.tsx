import { useEffect, useMemo, useState } from "react";
import { CarItem } from "../cars/CarItem";
import styles from "./Home.module.scss";
import { CARS_URL } from "../../../constants";
import { CreateCarForm } from "../createCarForm/CreateCarForm";

interface Cars {
  id: number;
  name: string;
  picture: string;
  price: number;
}

export const Home = () => {
  const [cars, setCars] = useState<Cars[]>([]);

useEffect(() => {
  fetch(CARS_URL)
    .then((response) => response.json())
    .then((cars) => setCars(cars))
    .catch((error) => console.log(error));
}, []);

  return (
    <div>
      <h1 className={styles.title}>Cars catalog</h1>
      <CreateCarForm/>
      <div className={styles.wrapper}>
        {
          cars.length 
          ? 
          cars.map((car) => <CarItem key={car.id} car={car} />)
          : 
          <p>Loading...</p>
        }
      </div>
    </div>
  );
}

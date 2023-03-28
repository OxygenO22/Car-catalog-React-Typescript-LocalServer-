import { useEffect, useMemo, useState } from "react";
import { CarItem } from "../cars/CarItem";
import styles from "./Home.module.scss";
import { CARS_URL } from "../../../constants";
import { CreateCarForm } from "../createCarForm/CreateCarForm";
import axios from "axios";

/* interface Cars {
  id: number;
  name: string;
  picture: string;
  price: number;
} */

export const Home = () => {
  const [cars, setCars] = useState/* <Cars[]> */([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
console.log("totalCount", totalCount);

  useEffect(() => {
    if (fetching) {
      console.log("fetching")
      axios.get(CARS_URL + `?_limit=4&_page=${currentPage}`)
      .then((response) => {
        setCars([...cars, ...response.data]);
        setCurrentPage(prevState => prevState + 1);
        setTotalCount(response.headers["x-total-count"]);
      })
      .catch((error) => console.log(error))
      .finally(() => setFetching(false))
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  const scrollHandler = (e/* : MouseEvent */) => {
    
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 /* && cars.length < totalCount */) {
      setFetching(true);
    }
  }

/* useEffect(() => {
  fetch(CARS_URL)
    .then((response) => response.json())
    .then((cars) => setCars(cars))
    .catch((error) => console.log(error));
}, []); */

  return (
    <div className={styles.prime__wrapper}>
      <h1 className={styles.title}>Cars catalog</h1>
      <CreateCarForm car={cars} />
      <div className={styles.cars__wrapper}>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

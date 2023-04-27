import { useEffect, useState } from "react";
import axios from "axios";
import { CARS_URL } from "../../../constants";
import { CarItem } from "./CarItem";
import { CreateCarForm } from "../createCarForm/CreateCarForm";
import { Input } from "../../ui/input/Input";
import { MainTitle } from "../../ui/title/MainTitle";
import { RouteButton } from "../../ui/buttons/RouteButton";
import styles from "./Cars.module.scss";

interface ICars {
  id: number;
  name: string;
  picture: string;
  price: number;
}

export const Cars = () => {
  const [cars, setCars] = useState<ICars[]>([]);
  const [carsForCreateForm, setCarsForCreateForm] = useState<ICars[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const [searchValue, setSearchValue] = useState("");
  const [carsFiltered, setCarsFiltered] = useState<any>([]);

  const filterCars = (searchText: string, listOfCars: any) => {
    if (!searchText) {
      return listOfCars;
    }
    return listOfCars.filter(( name: string ) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    axios
      .get(CARS_URL)
      .then((response) => {
        setCarsFiltered(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (fetching && searchValue === "") {
      axios
        .get(CARS_URL + `?_limit=4&_page=${currentPage}`)
        .then((response) => {
          setCars([...cars, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(response.headers["x-total-count"]);
        })
        .catch((error) => console.log(error))
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: any) => {
    if (
      e.target?.documentElement.scrollHeight -
        (e.target?.documentElement.scrollTop + window.innerHeight) <
      100 /* && cars.length < totalCount */
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchValue, carsFiltered);
      setCars(filteredCars);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [searchValue]);

  useEffect(() => {
    fetch(CARS_URL)
      .then((response) => response.json())
      .then((cars) => setCarsForCreateForm(cars))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.prime__wrapper}>
      <MainTitle name="Cars catalog" />
      <RouteButton path="/" name="Back" />
      <CreateCarForm car={carsForCreateForm} />
      {/* <FindingSorting cars={cars} /> */}

      <form>
        <Input
          placeholder="Find"
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target?.value)}
        />
      </form>

      <div className={styles.cars__wrapper}>
        {cars.length && searchValue === "" ? (
          cars.map((car: ICars) => <CarItem key={car.id} car={car} />)
        ) : carsFiltered.length && searchValue !== "" ? (
          carsFiltered.map((car: ICars) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

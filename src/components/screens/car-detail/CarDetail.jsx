import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CarItem } from "../cars/CarItem";
import { CARS_URL } from "../../../constants";
import { RouteButton } from "../../ui/buttons/RouteButton";

export const CarDetail = () => {
  const {id} = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    if (!id)  return;
    axios.get(CARS_URL + `?id=${id}`)
      .then((response) => {
        setCar(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  (!car) && <p>Loading...</p>;

  return (
    <div >
      <RouteButton path="/CarsCatalog" name="Back" />
      <CarItem car={car} />
    </div>
  );
};

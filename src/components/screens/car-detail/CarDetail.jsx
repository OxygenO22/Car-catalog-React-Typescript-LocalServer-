import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CarItem } from "../cars/CarItem";
import axios from "axios";
import { CARS_URL } from "../../../constants";

export const CarDetail = () => {
  const {id} = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    if (!id)  return;
      axios.get(CARS_URL + `?id=${id}`)
      .then((response) => {
        setCar(response.data[0]);
      })
      .catch((error) => console.log(error))
  }, [id]);

  (!car) && <p>Loading...</p>

  return (
    <div>
      <Link style={{color: "white", marginBottom: "20px"}} to="/">Back</Link>
      <CarItem car={car} />
    </div>
  )
}

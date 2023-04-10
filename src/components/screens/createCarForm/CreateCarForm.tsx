import { FC, useEffect, useState } from "react";
import styles from "./CreateCarForm.module.scss";
import { CARS_URL } from "../../../constants";
import requestApi from "../../../request";
import { Button } from "../../ui/buttons/Button";


export interface car {
  name: string;
  picture: string;
  price: number;
}

interface createCarFormProps {
  car: car[];
}
interface newCarParams {
  id: number;
  name: string;
  picture: string;
  price: number;
}

export const CreateCarForm: FC<createCarFormProps> = ({ car }) => {
  const clearData = {
    name: "",
    price: "",
    picture: "",
  };
  const [data, setData] = useState(clearData);

  useEffect(() => {

  }, [])

  const createCar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const newCar: newCarParams = {
      id: +`${car.length + 1}`,
      name: data.name,
      price: +data.price,
      picture: data.picture,
    };
    if (data.name !== "" && data.price !== "" && data.picture !== "") {
      requestApi(CARS_URL, "POST", newCar);
      setData(clearData);
    } else {
      alert("fill all fields");
    }
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder="Name"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
        value={data.name}
      />
      <input
        className={styles.input}
        placeholder="Price"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            price: e.target.value,
          }))
        }
        value={data.price}
      />
      <input
        className={styles.input}
        placeholder="Picture"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            picture: e.target.value,
          }))
        }
        value={data.picture}
      />

      <button onClick={(e) => createCar(e)}>Create Card</button>

      {/* <Button onClick={(e: any) => createCar(e)} name="Create Card" /> */}
    </form>
  );
};

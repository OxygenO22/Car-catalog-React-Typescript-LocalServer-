import {FC, useState} from "react";
import { Button } from "../../ui/buttons/Button";
import { CARS_URL } from "../../../constants";
import { Input } from "../../ui/input/Input";
import requestApi from "../../../request";
import styles from "./CreateCarForm.module.scss";


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
      <Input
        placeholder="Name"
        onChange={(e: any) =>
          setData((prev) => ({...prev,
            name: e.target.value,}))
        }
        value={data.name}
      />
      <Input
        placeholder="Price"
        onChange={(e: any) =>
          setData((prev) => ({...prev,
            price: e.target.value,}))
        }
        value={data.price}
      />
      <Input
        placeholder="Picture"
        onChange={(e: any) =>
          setData((prev) => ({...prev,
            picture: e.target.value,}))
        }
        value={data.picture}
      />

      {/* <button onClick={(e) => createCar(e)}>Create Card</button> */}

      <Button onClick={(e: any) => createCar(e)} name="Create Car Card" />
    </form>
  );
};

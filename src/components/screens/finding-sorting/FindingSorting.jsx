import React, { useEffect, useState } from "react";
import styles from "./FindingSorting.module.scss";

const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }
  return listOfCars.filter(({name}) => name.toLowerCase().includes(searchText.toLowerCase()));
}

export const FindingSorting = ({cars}) => {
  const [carsFiltered, setCarsFiltered] = useState(cars);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchValue, cars);
      setCarsFiltered(filteredCars);
    }, 300);
    return () => clearTimeout(Debounce)
  }, [searchValue])

  return (
    <div className={styles.wraper}>
      <form>
        <input 
          className={styles.input} 
          type="text" 
          placeholder="Find"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)} 
        />
      </form>
    </div>
  )
}

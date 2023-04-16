import React from "react";
import styles from "./CardItem.module.scss";
import { IProduct } from "../../../../store/product/Product.type";
import { useGetProductsQuery } from "../../../../store/product/Product.api";
import { Button } from "../../../ui/buttons/Button";

export const CardItem = () => {
  const {data, isLoading, error} = useGetProductsQuery(9);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        <div style={{ color: "red" }}>Error</div>
      ) : (
        data?.map((item: IProduct) => (
          <div className={styles.card__item} key={item.id}>
            <div className={styles.card__titleWrapper}>
              <p className={styles.card__title} title={item.title}>
                {item.title}
              </p>
            </div>
            <div className={styles.card__picture}>
              <img
                src={item.image}
                alt={`Image ${item.image}`}
                className={styles.card__img}
              />
            </div>
            <div className={styles.card__info}>
              <p className={styles.card__category}>{item.category}</p>
              <p className={styles.card__price}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  currencyDisplay: "symbol",
                  minimumFractionDigits: 0,
                }).format(item.price)}
              </p>
            </div>
            <div className={styles.card__button}>
              <Button name="Add to cart" />
            </div>
          </div>
        ))
      )}
    </>
  );
}

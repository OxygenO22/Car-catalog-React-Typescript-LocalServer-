import { Button } from "../../../ui/buttons/Button";
import  { FC } from "react";
import { IProduct } from "../../../../store/product/Product.type";
import styles from "./CardItem.module.scss";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export const CardItem: FC<{product: IProduct}> = ({product}) => {
  
  const {addItem} = useActions();

  const {cart} = useTypedSelector(state => state);

  const isExistInCart = cart.some((p: any) => p.id === product.id);

  return (
    <>
      <div className={styles.card__item}>
        <div className={styles.card__titleWrapper}>
          <p className={styles.card__title} title={product.title}>
            {product.title}
          </p>
        </div>
        <div className={styles.card__picture}>
          <img
            src={product.image}
            alt={`Image ${product.image}`}
            className={styles.card__img}
          />
        </div>
        <div className={styles.card__info}>
          <p className={styles.card__category}>{product.category}</p>
          <p className={styles.card__price}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              currencyDisplay: "symbol",
              minimumFractionDigits: 0,
            }).format(product.price)}
          </p>
        </div>
        <div className={styles.card__button}>
          <Button
            name={isExistInCart ? "Already in cart" : "Add to cart"}
            onClick={() => !isExistInCart && addItem(product)}
          />
        </div>
      </div>
    </>
  );
};

import React from "react";
import styles from "./CartDropdown.module.scss";
import { useOutside } from "../../../hooks/useOutside";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Button } from "../../../ui/buttons/Button";
import { IProduct } from "../../../../store/product/Product.type";
import { useActions } from "../../../hooks/useActions";
import { MainTitle } from "../../../ui/title/MainTitle";

export const CartDropdown = () => {
  const {ref, isShow, setIsShow} = useOutside(false);

  const {cart} = useTypedSelector(state => state);

  const {removeItem} = useActions();

  return (
    <div>
      <div className={styles.cart__buttonopen}>
        <Button
          name={!isShow ? `Open Cart` : `Close Cart`}
          onClick={() => setIsShow(!isShow)}
        />
      </div>

      {isShow && (
        <div className={styles.cart__wrapper} ref={ref}>
          {cart.length ? (
            cart.map((product: IProduct) => (
              <div className={styles.cart__item} key={product.id}>
                <div className={styles.cart__picture}>
                  <img
                    className={styles.cart__img}
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className={styles.cart__info}>
                  <div className={styles.cart__titlewrapper}>
                    <p>{product.title}</p>
                  </div>
                  <div className={styles.cart__pricewrapper}>
                    <p>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        currencyDisplay: "symbol",
                        minimumFractionDigits: 0,
                      }).format(product.price)}
                    </p>
                  </div>
                </div>
                <Button name="Delete" onClick={() => removeItem({id: product.id})} />
              </div>
            ))
          ) : (
            <MainTitle name="Cart is empty" />
          )}
        </div>
      )}
    </div>
  );
}

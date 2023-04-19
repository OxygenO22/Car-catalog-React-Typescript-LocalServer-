import React from 'react'
import styles from "./ClothersShop.module.scss";
import { RouteButton } from '../../ui/buttons/RouteButton';
import { MainTitle } from '../../ui/title/MainTitle';
import { CardItem } from './cardItem/CardItem';
import { useGetProductsQuery } from '../../../store/product/Product.api';
import { IProduct } from '../../../store/product/Product.type';
import { CartDropdown } from './cartDropdown/CartDropdown';

export const ClothersShop = () => {
  const { data, isLoading, error } = useGetProductsQuery(9);

  return (
    <div className={styles.clothersshop__wrapper}>
      <MainTitle name="Clothers shop (Redux Toolkit)" />
      <RouteButton path="/" name="Back" />
      <div className={styles.card__wrapper}>

      {
        isLoading ? (
          "Loading..."
        ) : error ? (
          <div style={{ color: "red" }}>Error</div>
        ) : 
          data?.map((product: IProduct) => 
          <CardItem key={product.id} product={product} />
          )
      }
      </div>
      <CartDropdown />
    </div>
  );
}

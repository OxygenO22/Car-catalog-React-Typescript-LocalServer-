import React from 'react'
import styles from "./ClothersShop.module.scss";
import { RouteButton } from '../../ui/buttons/RouteButton';
import { MainTitle } from '../../ui/title/MainTitle';
import { CardItem } from './cardItem/CardItem';

export const ClothersShop = () => {

  return (
    <div className={styles.clothersshop__wrapper}>
      <MainTitle name="Clothers shop (Redux Toolkit)" />
      <RouteButton path="/" name="Back" />
      <div className={styles.card__wrapper}>
        <CardItem />
      </div>
    </div>
  );
}

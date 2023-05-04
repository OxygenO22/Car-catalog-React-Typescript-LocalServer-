import { CardItem } from "./cardItem/CardItem";
import { CartDropdown } from "./cartDropdown/CartDropdown";
import { IProduct } from "../../../store/product/Product.type";
import { MainTitle } from "../../ui/title/MainTitle";
import { RouteButton } from "../../ui/buttons/RouteButton";
import styles from "./ClothersShop.module.scss";
import { useGetProductsQuery } from "../../../store/product/Product.api";

export const ClothersShop = () => {
  const {
    data, isLoading, error 
  } = useGetProductsQuery(9);

  return (
    <div className={styles.clothersshop__wrapper}>
      <MainTitle name="Clothers shop (Redux Toolkit Query)" />
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
};

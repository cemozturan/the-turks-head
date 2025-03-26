import { DrinkItem } from "@/constants/drinks";
import Description from "./Description";
import styles from "./Drink.module.css";
import Ingredients from "./Ingredients";
import Title from "./Title";

const Drink = ({
  drink,
  onClick,
}: {
  drink: DrinkItem;
  onClick: (drinkTitle: string) => void;
}) => {
  return (
    <>
      <div className={styles.container}>
        <Title title={drink.title} onClick={() => onClick(drink.title)} />
        <Ingredients ingredients={drink.ingredients} />
        <Description description={drink.menuDescription} />
      </div>
    </>
  );
};

export default Drink;

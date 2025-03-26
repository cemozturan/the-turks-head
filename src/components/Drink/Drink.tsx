import { DrinkItem } from "@/constants/drinks";
import Description from "./Description";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Title title={drink.title} onClick={() => onClick(drink.title)} />
        <Ingredients ingredients={drink.ingredients} />
        <Description description={drink.menuDescription} />
      </div>
    </>
  );
};

export default Drink;

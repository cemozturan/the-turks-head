import styles from "./Drink.module.css";

const Ingredients = ({ ingredients }: { ingredients: string[] }) => {
  const ingredientsText = ingredients.join(" • ");
  return <p className={styles.ingredients}>{ingredientsText}</p>;
};

export default Ingredients;

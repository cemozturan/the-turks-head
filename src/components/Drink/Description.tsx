import styles from "./Drink.module.css";

const Description = ({ description }: { description: string }) => {
  return <p className={styles.description}>{description}</p>;
};

export default Description;

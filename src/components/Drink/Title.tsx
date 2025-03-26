import styles from "./Drink.module.css";

const Title = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <p className={styles.title} onClick={onClick}>
      {title}
    </p>
  );
};

export default Title;

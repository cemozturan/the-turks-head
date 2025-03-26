import { TEXT_COLOR } from "@/constants/colors";
import styles from "./MenuTitle.module.css";

const MenuTitle = ({ title = "Cocktails" }: { title?: string }) => {
  return (
    <div style={{ padding: "0 5rem" }}>
      <h1
        style={{
          color: TEXT_COLOR,
        }}
        className={styles.container}
      >
        {title}
      </h1>
    </div>
  );
};

export default MenuTitle;

import { TEXT_COLOR } from "@/constants/colors";
import styles from "./Drink.module.css";

const OpenModalIcon = () => {
  return (
    <svg
      className={styles.icon}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height: "14px",
        position: "relative",
        top: "-4px",
        left: "-3px",
      }}
    >
      <path
        d="M5.3077 20.5C4.80257 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.3077C3.5 4.80257 3.675 4.375 4.025 4.025C4.375 3.675 4.80257 3.5 5.3077 3.5H11.6153V4.99998H5.3077C5.23077 4.99998 5.16024 5.03203 5.09612 5.09613C5.03202 5.16024 4.99997 5.23077 4.99997 5.3077V18.6923C4.99997 18.7692 5.03202 18.8397 5.09612 18.9038C5.16024 18.9679 5.23077 19 5.3077 19H18.6923C18.7692 19 18.8397 18.9679 18.9038 18.9038C18.9679 18.8397 19 18.7692 19 18.6923V12.3846H20.5V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6923 20.5H5.3077ZM9.7192 15.3346L8.66538 14.2808L17.9461 4.99998H14V3.5H20.5V9.99998H19V6.0538L9.7192 15.3346Z"
        fill={TEXT_COLOR}
      />
    </svg>
  );
};

const Title = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <div className="d-flex" onClick={onClick}>
      <p className={styles.title}>{title}</p>
      <OpenModalIcon />
    </div>
  );
};

export default Title;

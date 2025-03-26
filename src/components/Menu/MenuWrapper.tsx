import { ReactNode } from "react";
import styles from "./MenuWrapper.module.css";

const MenuWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div
        className="d-flex flex-column"
        style={{
          backgroundImage: `url("./menu.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100%",
        }}
      >
        <div className={styles.children}>{children}</div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            top: "20px",
          }}
        >
          <img
            src="./vercel.png"
            height="48px"
            width="48px"
            style={{
              border: "2px solid black",
              padding: "0.25rem",
              backgroundColor: "white",
            }}
            alt="QR Code"
          />
        </div> */}
      </div>
    </div>
  );
};

export default MenuWrapper;

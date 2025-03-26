import { ReactNode } from "react";

const MenuWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "493px",
      }}
    >
      <div
        className="d-flex justify-content-center flex-column"
        style={{
          backgroundImage: `url("./menu.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100%",
        }}
      >
        <div style={{ minHeight: "500px" }}>{children}</div>
      </div>
    </div>
  );
};

export default MenuWrapper;

import { TEXT_COLOR } from "@/constants/colors";

const MenuTitle = ({ title = "Cocktails" }: { title?: string }) => {
  return (
    <div style={{ padding: "0 5rem" }}>
      <h1
        style={{
          fontFamily: "MyFont, sans-serif",
          letterSpacing: "0.75px",
          color: TEXT_COLOR,
          textAlign: "center",
          marginTop: "-16px",
          borderBottom: "1px solid goldenrod",
          paddingBottom: "0.25rem",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default MenuTitle;

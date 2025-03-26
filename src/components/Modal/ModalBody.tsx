import { DrinkItem } from "@/constants/drinks";
import useMediaQuery from "@/hooks/useMediaQuery";

const ModalBody = ({ drink }: { drink: DrinkItem }) => {
  const isMobile = useMediaQuery(768);

  const Image = (
    <img
      src={drink.image}
      height="300px"
      style={{ borderRadius: "0.5rem", marginRight: "1rem" }}
      alt={drink.title}
    />
  );

  console.log({ isMobile });

  if (isMobile) {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          {Image}
          <p style={{ marginBottom: 0 }}>{drink.modalDescriptionTop}</p>
        </div>
        <p style={{ marginTop: "1rem" }}>{drink.modalDescriptionBottom}</p>
      </div>
    );
  }

  return (
    <div className="d-flex">
      {Image}
      <div style={{ paddingLeft: "1rem" }}>
        <p style={{ marginBottom: 0 }}>
          {drink.modalDescriptionTop} {drink.modalDescriptionBottom}
        </p>
      </div>
    </div>
  );
};

export default ModalBody;

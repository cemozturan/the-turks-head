import { DrinkItem } from "@/constants/drinks";
import { useIsMobile } from "@/hooks/useIsMobile";

const ModalBody = ({ drink }: { drink: DrinkItem }) => {
  const isMobile = useIsMobile();

  const Image = (
    <img
      src={drink.image}
      height="300px"
      style={{ borderRadius: "0.5rem", marginBottom: "1rem" }}
      alt={drink.title}
    />
  );

  // if (isMobile) {
  //   return (
  //     <div className="d-flex flex-column">
  //       <div className="d-flex flex-row">
  //         {Image}
  //         <p style={{ marginBottom: 0 }}>{drink.modalDescriptionTop}</p>
  //       </div>
  //       <p style={{ marginTop: "1rem" }}>{drink.modalDescriptionBottom}</p>
  //     </div>
  //   );
  // }

  return (
    <div className="d-flex flex-column">
      {Image}
      <p>
        {drink.modalDescriptionTop} {drink.modalDescriptionBottom}
      </p>
    </div>
  );
};

export default ModalBody;

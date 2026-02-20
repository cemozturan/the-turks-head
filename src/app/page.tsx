"use client";
import Drink from "@/components/Drink/Drink";
import MenuTitle from "@/components/Menu/MenuTitle";
import MenuWrapper from "@/components/Menu/MenuWrapper";
import ModalBody from "@/components/Modal/ModalBody";
import { TEXT_COLOR } from "@/constants/colors";
import { COCKTAILS, DrinkItem, MOCKTAILS } from "@/constants/drinks";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./page.module.css";
import Image from "next/image";

const ALCOHOLIC_DRINKS_1: DrinkItem[] = [
  COCKTAILS.BRAMBLE,
  COCKTAILS.CORPSE_REVIVER_NO_2,
  COCKTAILS.TOREADOR,
  COCKTAILS.MARTINI,
  COCKTAILS.CHRYSANTHEMUM,
  COCKTAILS.AVIATION,
  COCKTAILS.LAST_WORD,
];

const ALCOHOLIC_DRINKS_2: DrinkItem[] = [
  COCKTAILS.BOULEVARDIER,
  COCKTAILS.ENZONI,
  COCKTAILS.PAPER_PLANE,
  COCKTAILS.WHISKEY_SOUR,
  COCKTAILS.ORIGINAL_VENETIAN,
  COCKTAILS.YALAPENIS,
  COCKTAILS.SENTIMENTAL_GENTLEMAN,
];

const NON_ALCOHOLIC_DRINKS: DrinkItem[] = [
  MOCKTAILS.A_LIFE_FULL_OF_PASSION,
  MOCKTAILS.OUR_BLUEBERRY_NIGHTS,
  MOCKTAILS.TYHME_FOR_A_TREAT,
  MOCKTAILS.PEASED_TO_MEET_YOU,
  MOCKTAILS.PAINKILLER,
];

export default function Home() {
  const [selectedDrink, setSelectedDrink] = useState<DrinkItem | undefined>(
    undefined
  );

  const [showDaily, setShowDaily] = useState(true);

  const handleClose = () => setSelectedDrink(undefined);
  const handleShow = (drinkTitle: string) => {
    const selectedDrink = [
      ...ALCOHOLIC_DRINKS_1,
      ...ALCOHOLIC_DRINKS_2,
      ...NON_ALCOHOLIC_DRINKS,
    ].find((x) => x.title === drinkTitle);
    setSelectedDrink(selectedDrink);
  };

  const handleDailyClose = () => setShowDaily(false);
  const handleDailyShow = () => setShowDaily(true);

  return (
    // <main className={styles.gridContainer}>
    //   <MenuWrapper>
    //     <MenuTitle />
    //     <div style={{ color: TEXT_COLOR }}>
    //       {ALCOHOLIC_DRINKS_1.map((drink) => {
    //         return (
    //           <Drink
    //             key={drink.title}
    //             drink={drink}
    //             onClick={(drinkTitle: string) => handleShow(drinkTitle)}
    //           />
    //         );
    //       })}
    //     </div>
    //   </MenuWrapper>
    //   <MenuWrapper>
    //     <MenuTitle />
    //     <div style={{ color: TEXT_COLOR }}>
    //       {ALCOHOLIC_DRINKS_2.map((drink) => {
    //         return (
    //           <Drink
    //             key={drink.title}
    //             drink={drink}
    //             onClick={(drinkTitle: string) => handleShow(drinkTitle)}
    //           />
    //         );
    //       })}
    //     </div>
    //   </MenuWrapper>
    //   <MenuWrapper>
    //     <MenuTitle title="Mocktails" />
    //     <div style={{ color: TEXT_COLOR }}>
    //       {NON_ALCOHOLIC_DRINKS.map((drink) => {
    //         return (
    //           <Drink
    //             key={drink.title}
    //             drink={drink}
    //             onClick={(drinkTitle: string) => handleShow(drinkTitle)}
    //           />
    //         );
    //       })}
    //     </div>
    //   </MenuWrapper>
    //   <Modal show={!!selectedDrink} onHide={handleClose} centered>
    //     <div
    //       style={{
    //         backgroundColor: "#fff8c5",
    //         borderRadius: "8px",
    //         color: "darkred",
    //       }}
    //     >
    //       <Modal.Header closeButton style={{ borderColor: "darkred" }}>
    //         <Modal.Title>{selectedDrink?.title}</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //         {selectedDrink && <ModalBody drink={selectedDrink} />}
    //       </Modal.Body>
    //       <Modal.Footer style={{ borderColor: "darkred" }}>
    //         <Button variant="secondary" onClick={handleClose}>
    //           Close
    //         </Button>
    //       </Modal.Footer>
    //     </div>
    //   </Modal>
    // </main>
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Button
        style={{ position: "absolute", top: "8px", right: "8px" }}
        onClick={handleDailyShow}
      >
        Drink Responsibly
      </Button>
      <Image
        src="daily-cover.png"
        alt={""}
        height="600"
        width="300"
        style={{ width: "auto" }}
      />
      <Image
        src="daily-drinks.png"
        alt={""}
        height="600"
        width="300"
        style={{ width: "auto" }}
      />
      <Modal show={!!showDaily} onHide={handleDailyClose} centered>
        <div
          style={{
            backgroundColor: "#fff8c5",
            borderRadius: "8px",
            color: "darkred",
          }}
        >
          <Modal.Header closeButton style={{ borderColor: "darkred" }}>
            <Modal.Title>These people did not.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                overflow: "scroll",
              }}
            >
              <Image
                src="aviation.jpg"
                alt={""}
                height="240"
                width="120"
                style={{ width: "auto" }}
              />
              <Image
                src="aviation.jpg"
                alt={""}
                height="240"
                width="120"
                style={{ width: "auto" }}
              />
              <Image
                src="aviation.jpg"
                alt={""}
                height="240"
                width="120"
                style={{ width: "auto" }}
              />
              <Image
                src="aviation.jpg"
                alt={""}
                height="240"
                width="120"
                style={{ width: "auto" }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer style={{ borderColor: "darkred" }}>
            <Button variant="secondary" onClick={handleDailyClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </main>
  );
}

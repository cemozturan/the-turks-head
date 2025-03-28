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

const ALCOHOLIC_DRINKS_1: DrinkItem[] = [
  COCKTAILS.BRAMBLE,
  COCKTAILS.CORPSE_REVIVER_NO_2,
  COCKTAILS.WHISKEY_SOUR,
  COCKTAILS.MARTINI,
  COCKTAILS.CHRYSANTHEMUM,
  COCKTAILS.AVIATION,
  COCKTAILS.LAST_WORD,
];

const ALCOHOLIC_DRINKS_2: DrinkItem[] = [
  COCKTAILS.BOULEVARDIER,
  COCKTAILS.ENZONI,
  COCKTAILS.AMARETTO_SOUR,
  COCKTAILS.SENTIMENTAL_GENTLEMAN,
  COCKTAILS.MONTE_CARLO,
  COCKTAILS.ORIGINAL_VENETIAN,
  COCKTAILS.COQUITO,
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

  const handleClose = () => setSelectedDrink(undefined);
  const handleShow = (drinkTitle: string) => {
    const selectedDrink = [
      ...ALCOHOLIC_DRINKS_1,
      ...ALCOHOLIC_DRINKS_2,
      ...NON_ALCOHOLIC_DRINKS,
    ].find((x) => x.title === drinkTitle);
    setSelectedDrink(selectedDrink);
  };

  return (
    <main className={styles.gridContainer}>
      <MenuWrapper>
        <MenuTitle />
        <div style={{ color: TEXT_COLOR }}>
          {ALCOHOLIC_DRINKS_1.map((drink) => {
            return (
              <Drink
                key={drink.title}
                drink={drink}
                onClick={(drinkTitle: string) => handleShow(drinkTitle)}
              />
            );
          })}
        </div>
      </MenuWrapper>
      <MenuWrapper>
        <MenuTitle />
        <div style={{ color: TEXT_COLOR }}>
          {ALCOHOLIC_DRINKS_2.map((drink) => {
            return (
              <Drink
                key={drink.title}
                drink={drink}
                onClick={(drinkTitle: string) => handleShow(drinkTitle)}
              />
            );
          })}
        </div>
      </MenuWrapper>
      <MenuWrapper>
        <MenuTitle title="Mocktails" />
        <div style={{ color: TEXT_COLOR }}>
          {NON_ALCOHOLIC_DRINKS.map((drink) => {
            return (
              <Drink
                key={drink.title}
                drink={drink}
                onClick={(drinkTitle: string) => handleShow(drinkTitle)}
              />
            );
          })}
        </div>
      </MenuWrapper>
      <Modal show={!!selectedDrink} onHide={handleClose} centered>
        <div
          style={{
            backgroundColor: "#fff8c5",
            borderRadius: "8px",
            color: "darkred",
          }}
        >
          <Modal.Header closeButton style={{ borderColor: "darkred" }}>
            <Modal.Title>{selectedDrink?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedDrink && <ModalBody drink={selectedDrink} />}
          </Modal.Body>
          <Modal.Footer style={{ borderColor: "darkred" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </main>
  );
}

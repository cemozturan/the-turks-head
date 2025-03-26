"use client";
import Drink from "@/components/Drink/Drink";
import MenuTitle from "@/components/Menu/MenuTitle";
import MenuWrapper from "@/components/Menu/MenuWrapper";
import { TEXT_COLOR } from "@/constants/colors";
import { COCKTAILS, DrinkItem, MOCKTAILS } from "@/constants/drinks";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./page.module.css";

const ALCOHOLIC_DRINKS: DrinkItem[] = [
  COCKTAILS.BRAMBLE,
  COCKTAILS.CORPSE_REVIVER_NO_2,
  COCKTAILS.WHISKEY_SOUR,
  COCKTAILS.MARTINI,
  COCKTAILS.CHRYSANTHEMUM,
  COCKTAILS.AVIATION,
  COCKTAILS.LAST_WORD,
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
    const selectedDrink = [...ALCOHOLIC_DRINKS, ...NON_ALCOHOLIC_DRINKS].find(
      (x) => x.title === drinkTitle
    );
    setSelectedDrink(selectedDrink);
  };
  return (
    <main className={styles.main}>
      <MenuWrapper>
        <MenuTitle />
        <div style={{ color: TEXT_COLOR }}>
          {ALCOHOLIC_DRINKS.map((drink) => {
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
        <div style={{ backgroundColor: "#fff8c5", borderRadius: "8px" }}>
          <Modal.Header closeButton style={{ borderColor: "black" }}>
            <Modal.Title>{selectedDrink?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex">
              <img
                src={selectedDrink?.image}
                height="300px"
                style={{ borderRadius: "0.5rem" }}
                alt={selectedDrink?.title}
              />
              <div style={{ paddingLeft: "1rem" }}>
                <p style={{ marginBottom: 0 }}>
                  {selectedDrink?.modalDescription}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ borderColor: "black" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </main>
  );
}

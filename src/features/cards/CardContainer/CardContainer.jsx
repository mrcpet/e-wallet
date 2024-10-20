import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./CardContainer.module.css";

function CardContainer() {
  const cards = useSelector((store) => store.cards.cards);
  const [activeCard, setActiveCard] = useState([]);
  const [inactiveCards, setInactiveCards] = useState([]);

  useEffect(() => {
    setActiveCard(cards.filter((card) => card.active === true));
    setInactiveCards(cards.filter((card) => card.active === false));
  }, [cards]);

  return (
    <div className={styles.cardContainer}>
      <h2>Active</h2>
      {activeCard.length > 0 &&
        activeCard.map((card, index) => (
          <Link key={index} to={"/card/" + card.id}>
            <Card key={index} data={card} />
          </Link>
        ))}
      <h2>Inactive</h2>
      {inactiveCards.length > 0 &&
        inactiveCards.map((card, index) => (
          <Link key={index} to={"/card/" + card.id}>
            <Card key={index} data={card} />
          </Link>
        ))}
    </div>
  );
}

export default CardContainer;

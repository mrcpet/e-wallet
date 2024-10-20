import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import { deleteCard, activateCard } from "../cardSlice";
import { useState } from "react";
import styles from "./CardPageContainer.module.css";

function CardPageContainer({ card }) {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const isActive = card?.active;

  const handleDelete = () => {
    dispatch(deleteCard(card.id));
    setSuccess(true);
  };
  const handleActivate = () => {
    dispatch(activateCard(card.id));
  };
  return (
    <div className={styles.cardPageContainer}>
      <div className={styles.cardButtons}>
        {!isActive && !success && (
          <button onClick={handleDelete}>Delete</button>
        )}
        {!isActive && !success && (
          <button onClick={handleActivate}>Activate</button>
        )}
      </div>
      {card && (
        <>
          <Card data={card} />
          <CardForm data={card} />
        </>
      )}
      {!card && success && <p>Card was deleted!</p>}
    </div>
  );
}

export default CardPageContainer;

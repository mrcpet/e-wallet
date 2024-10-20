import { useState } from "react";
import { deleteInactives } from "../cardSlice";
import { useDispatch } from "react-redux";
import styles from "./DeleteInactiveCards.module.css";

function DeleteInactiveCards() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const handleDelete = () => {
    dispatch(deleteInactives());
    setMessage("All inactive cards was deleted.");
  };
  return (
    <div>
      <button onClick={handleDelete}>Delete all inactive cards</button>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default DeleteInactiveCards;

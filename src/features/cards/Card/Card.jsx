import styles from "./Card.module.css";
import {
  FaCcVisa,
  FaCcAmex,
  FaCcMastercard,
  FaCreditCard,
} from "react-icons/fa";

function Card({ data }) {
  let displayYear = data.expireYear.toString().slice(2);
  return (
    <div
      className={`${
        styles[data.vendor] ? styles[data.vendor] : styles.default
      } ${styles.card}`}
    >
      {data.vendor === "visa" ? (
        <FaCcVisa size={50} />
      ) : data.vendor === "amex" ? (
        <FaCcAmex size={50} />
      ) : data.vendor === "mastercard" ? (
        <FaCcMastercard size={50} />
      ) : (
        <FaCreditCard size={50} /> 
      )}
      <span className={styles.cardNumber}>
        {data.cardNumber?.replace(/(\d{4})(?=\d)/g, "$1 ")}
      </span>
      <div className={styles.cardinfo}>
        <span className={styles.cardHolder}>{data.cardholderName}</span>
        <span className={styles.cardExpiry}>
          EXP {data.expireMonth} / {displayYear}
        </span>
      </div>
      {data && data.active && (
        <span className={styles.activeIndicator}>active</span>
      )}
    </div>
  );
}

export default Card;

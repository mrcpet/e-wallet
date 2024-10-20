import { useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addCard, updateCard } from "../cardSlice";
import { validateInputs, maxAmountOfCards } from "../../../helpers/helpers";
import styles from "./CardForm.module.css";
import "../../../App.css";

function CardForm({ data }) {
  const [newCard, setNewCard] = useState({
    id: data?.id || crypto.randomUUID(),
    vendor: data?.vendor || "",
    cardNumber: data?.cardNumber?.replace(/\s+/g, "") || "",
    cardholderName: data?.cardholderName || "",
    expireMonth: data?.expireMonth || "",
    expireYear: data?.expireYear || "",
    ccv: data?.ccv || "",
    active: data?.active ?? false,
  });
  const [errors, setErrors] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const cards = useSelector((store) => store.cards.cards);
  const dispatch = useDispatch(null);

  const handleChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let maxAmount = maxAmountOfCards(cards);
    if (maxAmount && !data) {
      setErrors({
        maxAmount: "Max amount of cards reached, remove one to add more!",
      });
      return;
    }
    let validate = validateInputs(newCard);
    if (Object.keys(validate).length > 0) {
      setErrors(validate);
      setSubmitMessage("");
      return;
    }
    if (!data) {
      dispatch(addCard(newCard));
      setNewCard({
        vendor: "",
        cardNumber: "",
        cardholderName: "",
        expireMonth: "",
        expireYear: "",
        ccv: "",
        active: false,
        id: crypto.randomUUID(),
      });
      setSubmitMessage("New card was added!");
      setErrors(null);
    }
    if (data && data.active === false) {
      dispatch(updateCard(newCard));
      setSubmitMessage("Card was updated!");
      setErrors(null);
    }
    if (data?.active) {
      setErrors({
        active: "You can't edit active cards!",
      });
    }
  };

  return (
    <>
      {!data && <Card data={newCard} />}
      <form className={styles.cardform} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="vendor">Vendor</label>
          <select
            id="vendor"
            value={newCard.vendor}
            name="vendor"
            required
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a vendor
            </option>
            <option value="mastercard">Mastercard</option>
            <option value="visa">Visa</option>
            <option value="amex">American Express</option>
          </select>
          {errors?.vendor && (
            <span className={styles.errorMessage}>{errors.vendor}</span>
          )}
        </div>

        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            minLength="16"
            maxLength="16"
            value={newCard.cardNumber}
            required
            onChange={handleChange}
          />
          {errors?.cardNumber && (
            <span className={styles.errorMessage}>{errors.cardNumber}</span>
          )}
        </div>

        <div>
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={newCard.cardholderName}
            onChange={handleChange}
            required
          />
          {errors?.cardholderName && (
            <span className={styles.errorMessage}>{errors.cardholderName}</span>
          )}
        </div>
        <div>
          <label htmlFor="expireMonth">Expiration date</label>
          <input
            type="number"
            id="expireMonth"
            name="expireMonth"
            value={newCard.expireMonth}
            min="1"
            max="12"
            required
            onChange={handleChange}
            placeholder="mm"
          />
          <input
            type="number"
            id="expireYear"
            name="expireYear"
            value={newCard.expireYear}
            min="2024"
            required
            onChange={handleChange}
            placeholder="yyyy"
          />
          {errors?.expireMonth && (
            <span className={styles.errorMessage}>{errors.expireMonth}</span>
          )}
          {errors?.expireYear && (
            <span className={styles.errorMessage}>{errors.expireYear}</span>
          )}
        </div>
        <div>
          <label htmlFor="ccv">CCV</label>
          <input
            type="text"
            id="ccv"
            name="ccv"
            value={newCard.ccv}
            minLength="3"
            maxLength="3"
            required
            onChange={handleChange}
          />
          {errors?.ccv && (
            <span className={styles.errorMessage}>{errors.ccv}</span>
          )}
        </div>

        <button type="submit">{!data ? "Add Card" : "Save Changes"}</button>
        {submitMessage !== "" && (
          <p className={styles.successMessage}>{submitMessage}</p>
        )}
        {errors?.maxAmount && (
          <span className={styles.errorMessage}>{errors.maxAmount}</span>
        )}
        {errors?.active && (
          <span className={styles.errorMessage}>{errors.active}</span>
        )}
      </form>
    </>
  );
}

export default CardForm;

import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: crypto.randomUUID(),
        vendor: "mastercard",
        cardNumber: "5678 5678 5678 5678",
        cardholderName: "John Doe",
        expireMonth: 1,
        expireYear: 2025,
        ccv: 123,
        active: true,
      },
      {
        id: crypto.randomUUID(),
        vendor: "visa",
        cardNumber: "1234 1234 1234 1234",
        cardholderName: "Jane Doe",
        expireMonth: 12,
        expireYear: 2028,
        ccv: 456,
        active: false,
      },
    ],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    activateCard: (state, action) => {
      const activeCardIndex = state.cards.findIndex(
        (card) => card.active === true
      );
      state.cards[activeCardIndex].active = false;
      const cardToActivate = state.cards.findIndex(
        (card) => card.id === action.payload
      );
      state.cards[cardToActivate].active = true;
    },
    updateCard: (state, action) => {
      const cardToUpdate = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      state.cards[cardToUpdate] = action.payload;
    },
    deleteCard: (state, action) => {
      const cardToDelete = state.cards.findIndex(
        (card) => card.id === action.payload
      );
      state.cards.splice(cardToDelete, 1);
    },
    deleteInactives: (state) => {
      state.cards = state.cards.filter((card) => card.active === true);
    },
  },
});

export const {
  addCard,
  inactivateCard,
  activateCard,
  updateCard,
  deleteCard,
  deleteInactives,
} = cardSlice.actions;
export default cardSlice.reducer;

const validateInputs = (obj) => {
  const errors = {};

  if (typeof obj.vendor !== "string") {
    errors.vendor = "Invalid vendor.";
  }

  if (!/^\d{16}$/.test(obj.cardNumber)) {
    errors.cardNumber = "Card number must be 16 digits";
  }

  if (!/^[A-Za-z\s]+$/.test(obj.cardholderName)) {
    errors.cardholderName = "Invalid name.";
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const maxYear = currentYear + 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (obj.expireYear === currentYear && obj.expireMonth < currentMonth) {
    errors.expireMonth = "Invalid month.";
  }

  if (obj.expireYear < currentYear || obj.expireYear > maxYear) {
    errors.expireYear = "Invalid year.";
  }

  if (!/^\d{3}$/.test(obj.ccv)) {
    errors.ccv = "CCV must be a 3-digit number";
  }

  if (typeof obj.active !== "boolean") {
    errors.active = "Active must be a boolean";
  }

  return errors;
};

const maxAmountOfCards = (cards) => {
  if (cards.length > 3) {
    return true;
  }
  return false;
};

export { validateInputs, maxAmountOfCards };

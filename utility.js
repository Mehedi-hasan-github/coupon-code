function getPriceValueById(priceId) {
  const priceValue = document.getElementById(priceId);
  const priceValueStr = priceValue.innerText;
  const value = parseInt(priceValueStr);
  return value;
}

function setTotalPriceValueById(totalId, newValue) {
  const totalValue = document.getElementById(totalId);
  totalValue.innerText = newValue;
}

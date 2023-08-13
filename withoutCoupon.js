document.getElementById("buybtn2").addEventListener("click", function () {
  const priceValue = getPriceValueById("price-without-coupon");
  const TotalpriceValue = getPriceValueById("totalPrice");

  const newTotalPrice = TotalpriceValue + priceValue;
  setTotalPriceValueById("totalPrice", newTotalPrice);
});

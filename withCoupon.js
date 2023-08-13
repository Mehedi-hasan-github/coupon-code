document.getElementById("buybtn1").addEventListener("click", function () {
  const priceValue = getPriceValueById("price-with-coupon");
  const TotalpriceValue = getPriceValueById("totalPrice");

  const couponInput = document.getElementById("inputCaupon");

  if (couponInput.value == "coupon30") {
    const warning = document.getElementById("coupon-warning");
    warning.style.display = "none";

    const discount = priceValue - (priceValue * 30) / 100;
    const newTotalPrice = TotalpriceValue + discount;
    setTotalPriceValueById("totalPrice", newTotalPrice);
    couponInput.value = "";
  } else {
    const warning = document.getElementById("coupon-warning");
    warning.style.display = "block";
  }
});

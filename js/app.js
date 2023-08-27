let discount = 0;
let total = 0;
let subTotal = 0;
const totalPriceElement = document.getElementById("total-price");
const discountPrice = document.getElementById("discount");
const totalPrice = document.getElementById("total");
const purchaseButton = document.getElementById("make-purchase");
const applyButton = document.getElementById("apply");
const couponInput = document.getElementById("coupon-input");
const ol = document.getElementById("ol");
const promoCode = document.getElementById("promo").innerText;

function calculate(card) {
  const cardPrice = card.querySelector(".productPrice").innerText;
  subTotal = subTotal + parseFloat(cardPrice);
  totalPriceElement.innerText = subTotal.toFixed(2);
  total = (subTotal - discount).toFixed(2);
  totalPrice.innerText = total;
  if (discount > 0) {
    discount = (subTotal * 20) / 100;
    discountPrice.innerText = discount.toFixed(2);
  }
  // add product title

  const li = document.createElement("li");
  const cardTitle = card.querySelector(".card-title").innerText;
  const serial = ol.childNodes.length;

  li.innerHTML = `${serial + 1}. ${cardTitle}`;
  ol.appendChild(li);

  // enable purches button

  if (subTotal > 0) {
    purchaseButton.removeAttribute("disabled");
  }
  // enable apply button

  if (subTotal >= 200) {
    applyButton.removeAttribute("disabled");
  }
}
// enable cuppon btn

applyButton.addEventListener("click", function () {
  if (couponInput.value === promoCode) {
    discount = (subTotal * 20) / 100;
    discountPrice.innerText = discount.toFixed(2);
    total = (subTotal - discount).toFixed(2);
    totalPrice.innerText = total;
    couponInput.value = "";
  }
});

const modalBtn = document.getElementById("close-modal");
modalBtn.addEventListener("click", function () {
  totalPriceElement.innerHTML = (0 - 0).toFixed(2);
  discountPrice.innerHTML = (0 - 0).toFixed(2);
  totalPrice.innerHTML = (0 - 0).toFixed(2);
  ol.innerHTML = "";
});

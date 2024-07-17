import { cart, addtocartFunction } from "../data/cart.js";
import { products } from "../data/products.js";
  
  let productHtml=``;
   for(let i=31;i<=33;i++){
   productHtml= productHtml+`
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${products[i].image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${products[i].name} 
    </div>

    

    <div class="product-price">
    ${products[i].priceCents/1} DH
    </div>

    <div class="product-quantity-container ">
   <span> quantité:</span> <br>
      <select class="quantity-selector js-quantity-selector-${products[i].id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-added-to-cart-${products[i].id} ">
      <img src="images/icons/checkmark.png">
      Added
    </div>
    <button class="add-to-cart-button button-primary js-add-to-cart"
    data-product-id="${products[i].id}" ">
     commannder
    </button>
  </div>`;
}

document.querySelector('.js-products-grid').innerHTML=productHtml;

document.querySelectorAll('.js-add-to-cart').forEach( (button) => {
  button.addEventListener('click' , () => {
    const productId=button.dataset.productId;
addtocartFunction(productId);
});})
import { cart , RemoveFromTheCart, UpdateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions,getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPayementSummary } from "./payementSummary.js";

export function renderOrderSummary(){
  let checkoutHtml='';
cart.forEach((cartItem)=>{
    const productId=cartItem.productId;
    let matchingProduct=getProduct(productId);
   ;
   const deliveryOptionId=cartItem.deliveryOptionId;
    let deliveryOption=getDeliveryOption(deliveryOptionId);

    const today=dayjs();
    const deliveryDate=today.add(deliveryOption.deliveryDays,'day');
   const dateString = deliveryDate.format('dddd , MMMM D');
 checkoutHtml+=`
 <div class="cart-item-container js-cart-item-${matchingProduct.id}">
 <div class="delivery-date">
   Bonne appétit:
 </div>

 <div class="cart-item-details-grid">
   <img class="product-image"
     src="${matchingProduct.image}">

   <div class="cart-item-details">
     <div class="product-name">
       ${matchingProduct.name}
     </div>
     <div class="product-price">
       ${((matchingProduct.priceCents)/1)}Dh
     </div>
     <div class="product-quantity">
       <span>
         Quantité: <span class="quantity-label">${cartItem.quantity}</span>
       </span>
       <span class="delete-quantity-link link-primary js-Delete-link" data-product-id="${matchingProduct.id}">
         Annuler
       </span>
     </div>
   </div>

   <div class="delivery-options">  
    ${DeliveryOptionsHtml(matchingProduct,cartItem)}
   </div>
   </div>
 </div>
</div
>
</div>
 `  });
function DeliveryOptionsHtml(matchingProduct,cartItem){
  let html='';
  deliveryOptions.forEach((deliveryOption)=>{
    const isChecked= deliveryOption.id === cartItem.deliveryOptionId;
    const price= deliveryOption.pricecents===0 
  ?`FREE Shipping`
  :`$${(deliveryOption.pricecents/100).toFixed(2)}-`;
   const today=dayjs();
  let deliveryDate=today.add(deliveryOption.deliveryDays,'day');
  let dateString=deliveryDate.format('dddd , MMMM D');
    //html+=
  `<div class="delivery-option" data-product-id="${matchingProduct.id}"
  data-delivery-option-id="${deliveryOption.id}">
  <input type="radio" class="delivery-option-input js-delivery-option-input"
  ${isChecked?'checked':''}
    name="delivery-option-${matchingProduct.id}">
  <div>
    <div class="delivery-option-date">
 ${dateString}
    </div>
    <div class="delivery-option-price">
  ${price}Shipping
    </div>
  </div>
</div>`

renderPayementSummary()
  }
)
return html;
};
 document.querySelector('.js-order-summary').innerHTML=checkoutHtml;

 document.querySelectorAll('.js-Delete-link').forEach((link) => { 
 link.addEventListener('click',()=>{
  const productId=link.dataset.productId;
  RemoveFromTheCart (productId);
  renderPayementSummary();
  const container = document.querySelector(`.js-cart-item-${productId}`);
  container.remove();
  updateCartQuantity();

 })});
 

 function updateCartQuantity() {
  let cartQuantity=0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  
    
}
updateCartQuantity();
document.querySelectorAll('.delivery-option')
.forEach((element)=>{
element.addEventListener('click',()=>{
 const productId= element.dataset.productId ;
 const deliveryOptionId=element.dataset.deliveryOptionId;
  UpdateDeliveryOption ( productId,deliveryOptionId);
  renderOrderSummary();

})});
}
renderOrderSummary();
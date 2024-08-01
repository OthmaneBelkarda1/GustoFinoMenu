import { cart , RemoveFromTheCart, UpdateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { deliveryOptions,getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderOrderSummary } from "./orderSummary.js";
export function renderPayementSummary(){
    let productPriceCents=0;
    let shippingPriceCents=0;
    cart.forEach((cartItem)=>{

        const product=getProduct(cartItem.productId);
        productPriceCents+=product.priceCents*cartItem.quantity;
        
        const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents+=deliveryOption.pricecents;
        
       })
     const totalBefoereTaxCents=productPriceCents+shippingPriceCents;
     
     const taxCents=(productPriceCents+shippingPriceCents)/10
     
     const totalPriceCents=totalBefoereTaxCents+taxCents;
    
     const PayementSummaryHtml=`<div class="payment-summary-row">
     <div ></div>
    
     </div>
     
     <div class="payment-summary-row">
     <div></div>
     
     </div>
     
     <div class="payment-summary-row subtotal-row">
     <div class="Numéro">Selectionner le Numéro De Votre Table:</div>
     <div class="payment-summary-money"></div>
     </div>
     
     <div class="payment-summary-row">
     <div><input class="place-number"  type="text"></div>
     <div class="payment-summary-money"></div>
     </div>
     
     <div class="payment-summary-row total-row">
     <div>Total</div>
     <div class="payment-summary-money">${productPriceCents}Dh</div>
     </div>
     
     <button class="place-order-button button-primary js-button-primary">
     Valider la commande
     </button>
     `
     document.querySelector('.js-payment-summary').innerHTML=PayementSummaryHtml;
     let validationButton=document.querySelector('.js-button-primary');
     let place=0;
     
   
     validationButton.addEventListener('click',async()=>{
      place=document.querySelector('.place-number').value;
      
await cart.forEach((item) => {
    item.place = place;
    fetch('https://backendgusto.onrender.com/article', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        productId: `${item.productId}`,
        quantity: `${item.quantity}`,
        place: `${item.place}`
    })
})
.then(alert("Votre ordre est confirmé!"))
.then(splice())
.catch(error => console.error('Error:', error))
});

  
      
      })

};


function splice(){
    cart.splice(0, cart.length);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderPayementSummary();
    renderOrderSummary();   
console.log(cart);
}
  function  verified(){

    document.querySelector('.button-primary').classList.add('verified');
    document.querySelector('.verified').innerHTML='commande Validée';
    function AddedMessage(){
    setTimeout( ()=>
        document.querySelector('.button-primary').classList.remove('verified')
      ,2000)}
     AddedMessage();

};

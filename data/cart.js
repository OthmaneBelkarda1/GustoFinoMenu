export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [];
}

/*function */
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export let addtocartFunction = (productId)=>{
  let totalQuantity=0;
    const quantitySelected=document.querySelector(`.js-quantity-selector-${productId}`);
    const  quantity=Number(quantitySelected.value);
    let variable1;
    cart.forEach((cartItem)=>
    { if (cartItem.productId===productId)
       { variable1=cartItem;}
    });
    if (variable1)
    variable1.quantity+=quantity;
    else
    cart.push({productId
  ,quantity
})
window.location.href="checkout.html"
;
    
    cart.forEach((cartItem)=>{
      totalQuantity=totalQuantity+cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML=totalQuantity;
     saveToStorage();
    const addedMessage = document.querySelector(
      `.js-added-to-cart-${productId}`
     
    );
    
    addedMessage.classList.add('added-to-cart-visibled');
    function AddedMessage(){
    setTimeout( ()=>
      addedMessage.classList.remove('added-to-cart-visibled')
      ,2000)}
     AddedMessage(); 
     
    }
   export  function RemoveFromTheCart (productId){
   let cartPrime=[];
   cart.forEach((cartItem)=>{
     if(cartItem.productId!==productId)
      cartPrime.push(cartItem);
   })
   cart=cartPrime;
   saveToStorage();
  
    };
  export function UpdateDeliveryOption ( productId , deliveryOptionId ){
    let matchingItem;
  
    cart.forEach((cartItem)=>
     { if (productId===cartItem.productId)
       matchingItem=cartItem;
     });
   matchingItem.deliveryOptionId = deliveryOptionId;
   saveToStorage();

    }
document.querySelector('.call-waiter-button').addEventListener('click',async()=>{
    placee=document.querySelector('.call-waiter-place').value;
 await fetch('https://backendgusto.onrender.com/article', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      productId: "0",
      quantity: 0,
      place: `${placee}`
  })
})
.then(alert("Your order has been confirmed!"))
.then(place=0)
.catch(error => console.error('Error:', error))
;


    
    })
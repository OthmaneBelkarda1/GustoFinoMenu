if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    alert("Geolocation is not supported by this browser.");
}

function success(position) {
    var userLatitude = position.coords.latitude;
    var userLongitude = position.coords.longitude;
    checkGeofence(userLatitude,userLongitude)    

}

function error() {
    setInterval(()=>{alert("La géolocalisation n'est pas activée. Veuillez activer la localisation sur votre appareil pour utiliser ce service!")},10)
}
var restaurantLatitude = 34.00624104994045; // Example coordinates
var restaurantLongitude =   -6.84750471161997; // Example coordinates
var geofenceRadius = 200; // Geofence radius in meters
function checkGeofence(userLatitude, userLongitude) {
    var distance = calculateDistance(userLatitude, userLongitude, restaurantLatitude, restaurantLongitude);
    if (distance <= geofenceRadius) {
        // User is within geofence, allow order placement
        CallWaiter();
    } else {
        // User is outside geofence, show an error message
       alert("Merci de visiter notre site. Veuillez noter que ce service est uniquement disponible pour les clients présents dans notre restaurant!"); 
       function blockUserActions() {
        // Show the overlay
        document.getElementById("overlay").style.display = "block";
    }
    blockUserActions()
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // Earth radius in meters
    var φ1 = lat1 * Math.PI/180;
    var φ2 = lat2 * Math.PI/180;
    var Δφ = (lat2 - lat1) * Math.PI/180;
    var Δλ = (lon2 - lon1) * Math.PI/180;
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var distance = R * c;
    return distance;
}



function CallWaiter(){ document.querySelector('.call-waiter-button').addEventListener('click',async()=>{
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
.then(alert("Votre ordre est confirmé!"))
.then(place=0)
.thenn(window.location.href="index.html")
.catch(error => console.error('Error:', error))
;


    
    })}
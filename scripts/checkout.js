import { renderOrderSummary } from "./checkout/orderSummary.js";

import { renderPayementSummary } from "./checkout/payementSummary.js";

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
    setInterval(()=>{alert("Unable to retrieve your location.")},10)
}
var restaurantLatitude = 33.91578138293152 ; // Example coordinates
var restaurantLongitude =  -6.918706889104768 ; // Example coordinates
var geofenceRadius = 50; // Geofence radius in meters
function checkGeofence(userLatitude, userLongitude) {
    var distance = calculateDistance(userLatitude, userLongitude, restaurantLatitude, restaurantLongitude);
    if (distance <= geofenceRadius) {
        // User is within geofence, allow order placement
        RenderCheckout();
    } else {
        // User is outside geofence, show an error message
       alert("You must be within the restaurant to place an order."); 
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
function RenderCheckout(){
    renderOrderSummary();
    renderPayementSummary();
}


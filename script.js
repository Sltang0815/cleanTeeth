// utilizing Js and APIs to add a map with the offices exact coordinates in San Tan
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 33.31002, lng: -111.742250 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
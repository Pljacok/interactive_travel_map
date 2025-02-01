function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.3794, lng: 31.1656 },
        zoom: 5
    });

    google.maps.event.addListener(map, "click", function(event) {
        new google.maps.Marker({
            position: event.latLng,
            map: map
        });
    });
}

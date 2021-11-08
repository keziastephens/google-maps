console.log('linked');

// initialize and add the map into our code

function initMap(){
    // to add a marker we first have to declare a location and 
    // we do this through declaring a latitude and longitude
    let napier = {lat:-39.5109, lng:176.8764};

    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 9,
        center: napier,

    });
}
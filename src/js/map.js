let map;
console.log('YAY');

const initMap = () => {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.915963, lng: 2.290117 },
    zoom: 5
    });

    const marker = new google.maps.Marker({
        position: { lat: 48.915963, lng: 2.290117 },
        map: map,
        title: 'Maison'
    });
}

export default initMap;
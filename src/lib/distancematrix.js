function getPosition() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
}

export async function getLocation(distLat, disLng) {
    const position = await getPosition();
    return distanceMatrix(position.coords.latitude, position.coords.longitude, distLat, disLng);
}

function distanceMatrix(currentLat, currentLng, destLat, destLng) {
    const radiusEarthKm = 6371.07103;
    const radiusLatFrom = currentLat * (Math.PI /180);
    const radiusLatTo = destLat * (Math.PI /180);
    const latDiff = radiusLatTo - radiusLatFrom;

    const radiusLngFrom = currentLng* (Math.PI /180);
    const radiusLngTo = destLng * (Math.PI /180);
    const lngDiff = radiusLngTo - radiusLngFrom;
    const distance = 2 * radiusEarthKm * Math.sin(Math.sqrt(Math.sin(latDiff/2) * Math.sin(latDiff/2) + Math.cos(radiusLatFrom) * Math.cos(radiusLatTo) * Math.sin(lngDiff/2)*Math.sin(lngDiff/2)));
    //console.log(distance);
    return distance;
}

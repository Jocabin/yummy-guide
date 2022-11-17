function getPosition() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
}

export async function getLocation() {
    const position = await getPosition();
    return position.coords
}

export function distanceMatrix(userLat, userLng, destLat, destLng) {
    console.log()
    const radiusEarthKm = 6371.07103;
    const radiusLatFrom = userLat * (Math.PI / 180);
    const radiusLatTo = destLat * (Math.PI / 180);
    const latDiff = radiusLatTo - radiusLatFrom;
    const radiusLngFrom = userLng * (Math.PI / 180);
    const radiusLngTo = destLng * (Math.PI / 180);
    const lngDiff = radiusLngTo - radiusLngFrom;
    let distance = 2 * radiusEarthKm * Math.sin(Math.sqrt(Math.sin(latDiff / 2) * Math.sin(latDiff / 2) + Math.cos(radiusLatFrom) * Math.cos(radiusLatTo) * Math.sin(lngDiff / 2) * Math.sin(lngDiff / 2)));
    distance = Math.round(distance * 100) / 100
    //console.log(distance);
    return distance;
}

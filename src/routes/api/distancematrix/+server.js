import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    const lng = url.searchParams.get('lng');
    const lat = url.searchParams.get('lat');
    let jsonResponse;
    const options = {}
    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=40.659569%2C-73.933783%7C40.729029&origins=${lng}-${lat}&key=AIzaSyA0n6tlDmXklI2kMKIxLOXn-3_V0cZDeR0`,options)
        .then(res => res.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
    return new Response(String("test"));
}
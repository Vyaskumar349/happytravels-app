import React from 'react';
import TripData from './TripData';
import "./TripStyle.css";

const Trip=()=>{
    return(<div className="trip">
    <h1>Recent Trips</h1>
    <p>You can discover unique destinations using Google Maps</p>

    <div className='tripcard'>

        <TripData image="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
        heading="Trip in Indonesia"
        text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.
        It consists of over 17,000 islands, including Sumatra, Java, SulaWeesi, and parts of Borneo and New Guinea."
        />

    <TripData image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f9/f2/d8/malaysia.jpg?w=500&h=300&s=1"
        heading="Trip in Malaysia"
        text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. "
        />

   <TripData image="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        heading="Trip in France"
        text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
        />
    </div>
    </div>)
}
export default Trip;
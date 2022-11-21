import React from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";

const Destination=()=>{
    return(<div className="destination">
   <h1>Popular Destinations</h1>
    <p>Tours give you the oppurtunity to see a lot,within a time frame.</p>

   <DestinationData
     cName="first-des"
    heading="Taal Valcano, Batangas"
                    text="One of the most iconic views in Luzon, Mt.Taal boasts a valcano inside a lake inside an island.If you fancy a closer look,the hike upto the crater is a mere 45 minutes, and is easy enough for beginners.
                    Guides will assist you mostly of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and stem vents.
                    The hike can be dusty and hot, so plan for an early morning trip, and then wind with some bulalo before heading back home!"
       imgCname="image"
       
       img1="https://i.pinimg.com/originals/ab/3b/4b/ab3b4b27bf5aeca3d7dd734767632958.jpg"
       img2="https://i.pinimg.com/originals/26/1e/a7/261ea7dc1fdf8d17828c29672ee817e3.jpg"
       />

<DestinationData 
cName="first-des-reverse"
heading="Mt. Daguldul, Batangas"
                    text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out
                     Mt. Daguldul,Batangas.You'll start your hike from the beach and pass through the tropical forest,different rock formations, and small streams.
                     There's a small store halfway up the trail where you can take a break and drink buko juice,and though the summit itself may not have the best view,the breeze is fantastic.
                     Once you've made it back down, head straight to the beach for a refreshing,well deserved swim."
       imgCname="image"
       
       img1="https://www.marxtermind.com/wp-content/uploads/2016/09/8593217933_fd7c5d0896_z.jpg"
       img2="http://1.bp.blogspot.com/-uazSmlIKgxY/VL3qN1INIwI/AAAAAAAAD2w/XvxG-TvSZec/s1600/20150117_153506.jpg"
       />
       
    </div>)
}
export default Destination;
import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleSpot from "./SingleSpot";

const TravelSpots = () => {
  const spots = useLoaderData();
  return (
    <div className="lg:flex gap-10 my-16 mx-10 md:grid grid-col-3">
      {spots.map((spot) => (
        <SingleSpot key={spot.id} spot={spot}></SingleSpot>
      ))}
    </div>
  );
};

export default TravelSpots;

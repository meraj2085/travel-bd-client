import React from "react";

const SingleSpot = ({ spot }) => {
  const { name, picture } = spot;
  return (
    <div>
      <div class="relative w-64 h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img class="object-cover h-full" src={picture} alt="" />

        <div class="absolute bottom-0 left-0 px-4 py-4">
          <h4
            class="mb-3 text-3xl font-semibold tracking-tight drop-shadow-xl text-white"
            style={{ textShadow: "2px 2px 8px black" }}
          >
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SingleSpot;

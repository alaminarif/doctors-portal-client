import React from "react";

const InfoCard = ({ img, cardTitle, cardText, bgClass }) => {
  return (
    <div class={`card lg:card-side bg-accent shadow-xl p-8 ${bgClass}`}>
      <figure>
        <img className="" src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;

import React from "react";

const Card = ({ name, age }) => {
  return (
    <div className="card">
      {/* <img src={Image1} alt="" className="card_img" /> */}
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
      </div>
    </div>
  );
};

export default Card;

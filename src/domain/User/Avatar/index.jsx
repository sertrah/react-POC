import React from "react";
import "./style.sass";

const Avatar = ({ picture, title, name }) => {
  return (
    <div className="avatar__container">
      <div className="avatar__content--img">
        <img src={picture} alt="" />
      </div>
      <div className="avatar__content--info">
        <span>{title}</span>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Avatar;

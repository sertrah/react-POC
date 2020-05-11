import React from "react";
import "./style.sass";

const Profile = ({ userInfo }) => {
  return (
    <div className="profile__container">
      <div className="decoracioncita">
        <span></span>
      </div>
      <p>{userInfo?.nat}</p>
      <p>{userInfo?.registered?.date}</p>
      <p>{userInfo?.email}</p>
      <p>{userInfo?.cell}</p>
      <p>{userInfo?.phone}</p>

      <p>
        {userInfo?.location &&
          Object.values(userInfo.location).slice(1, 4).join("-")}
      </p>
    </div>
  );
};

export default Profile;

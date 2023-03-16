import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        className="ui avatar image"
        src={user}
        alt="user image placeholder"
      ></img>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon right floated button"
        style={{ color: "red", marginTop: "17px" }}
      ></i>
    </div>
  );
};

export default ContactCard;

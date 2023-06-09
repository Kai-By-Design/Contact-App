import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        className="ui mini avatar image"
        src={user}
        alt="user image placeholder"
      ></img>
      <div className="middle aligned content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      {/* <i
        className="trash alternate outline icon right floated button"
        style={{ color: "red", marginTop: "17px" }}
        onClick={() => props.clickHandler(id)}
      ></i> */}
      <i
        className="right floated center middle large trash alternate outline icon button"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;

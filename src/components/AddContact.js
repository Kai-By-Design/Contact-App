//class component

import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    // This will reset the name and email fields to empty strings
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    // console.log(this.state);
  };
  render() {
    return (
      <div className="ui main addcon">
        {/* <h2> _</h2> */}
        <h2> Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              // Using type email in order to create a built in validation of email input
              type="email"
              name="email"
              placeholder="Email@emailaddress.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue padded">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;

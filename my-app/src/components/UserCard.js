import React from "react";

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      followers: e.tatget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    this.props.fetchUser(this.state.followers);
    this.setState({
      ...this.state,
      followers: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <input
          value={this.state.followers}
          onChange={this.handleChanges}>
          </input> */}
        <button>Fetch followers</button>
      </form>
    );
  }
}

export default UserCard;

import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/SJMucho")
      .then((res) => {
        this.setState({ ...this.state, data: res.data.message });
      })
      .catch((err) => err);
  }

  fetchUser = () => {
    axios
      .get(`https://api.github.com/users/SJMucho/followers`)
      .then((res) => {
        console.log(res);
        this.setState({
          ...this.state,
          user: res.data.message,
        });
      })
      .catch((err) => console.log(err));
  };

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      userName: e.target.value,
    });
  };

  render() {
    return (
      <div>
        Github Usercard
        <UserCard fetchUser={this.fetchUser} />
      </div>
    );
  }
}

export default App;

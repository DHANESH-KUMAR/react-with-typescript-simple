import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string | undefined;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  searchHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const user = this.props.users.find((x) => x.name === this.state.name);
    const state = this.state;

    this.setState((prevState) => {
      return {
        user: user,
      };
    });
  };
  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <hr />
        <input onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={this.searchHandler}>searchMe</button>
        <hr />
        <div>
          <p>{name}</p>
          {user?.name + " - "}
          {user?.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;

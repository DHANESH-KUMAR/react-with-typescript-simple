import ReactDOM from "react-dom";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent";
// import UserSearch from "./classes/UserSearch";
import UserSearch from "./refs/UserSearch";
const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      {/* <EventComponent /> */}

      {/* <UserSearch
        users={[
          { name: "Sarah", age: 20 },
          { name: "Alex", age: 20 },
          { name: "Michael", age: 20 },
        ]}
      />
       */}
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

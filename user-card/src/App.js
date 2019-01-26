import React, { Component } from "react";
// import user from "./images/user.png";
import avatar from "./images/man.png";
import "./App.css";

import reducers from "./reducers";
import { createStore } from "redux";

const initialState = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Black dresses",
  location: "localhost"
};
const store = createStore(reducers, initialState);

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="User__img">
          <img src={avatar} alt="user" />
        </section>

        <section className="User__info">
          <p>
            <span className="faint">I am</span> a {store.getState().description}
          </p>
          <p>
            <span className="faint">I like</span> {store.getState().likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{store.getState().name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{store.getState().location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;

import React from "react";
import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

import "./App.css";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

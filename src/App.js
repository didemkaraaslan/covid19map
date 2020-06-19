import React, { Component } from 'react';
import { Cards, Chart, CountryPicker} from "./components";
import "./app.module.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
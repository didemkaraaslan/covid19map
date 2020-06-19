import React, { Component } from 'react';
import { Cards, Chart, CountryPicker} from "./components";
import "./app.module.css";
import { fetchData } from "./api";

class App extends Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data)
  }

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
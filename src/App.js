import React, { Component } from 'react';
import { Cards, Chart, CountryPicker} from "./components";
import "./app.module.css";
import { fetchData } from "./api";

const coronaImage = "https://i.ibb.co/7QpKsCX/image.png";

class App extends Component {
  state = {
    data: {},
    country: ""
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {    
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <img src={coronaImage} alt="Corono Image" className="image" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
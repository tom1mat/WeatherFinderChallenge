/* eslint-disable */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import WeatherInfo from './components/WeatherInfo';
import Form from './components/Form';
import Container from './components/Container';

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

const App = () => {
  const [data, setData] = useState({});
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value || 'Madrid';
    const country = e.target.elements.country.value || 'es';
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`,
    );
    const weatherData = await apiCall.json();
    if (city && country) {
      setData({
        temperature: weatherData.main.temp,
        city: weatherData.name,
        country: weatherData.sys.country,
        humidity: weatherData.main.humidity,
        description: weatherData.weather[0].description,
        error: '',
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <Container className="col-5 title-container">
              <h1 className="title-container__title">Weather Finder</h1>
              <h3 className="title-container__subtitle">
                Find out temperature, conditions and more...
              </h3>
            </Container>
            <Container className="col-7 form-container">
              <Form onSubmit={handleSubmitForm} />
              <WeatherInfo {...data} />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

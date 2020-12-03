/* eslint-disable */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import WeatherInfo from 'components/WeatherInfo';
import Form from 'components/Form';
import Container from 'components/Container';

  import { get as getWeather } from 'services/weather';

const App = () => {
  const [data, setData] = useState({});
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value || 'Madrid';
    const country = e.target.elements.country.value || 'es';

    if (city && country) {
      const { data: _data } = await getWeather(city, country);
      setData(_data);
    }
  };

  return (
    <div className="wrapper">
      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <Container className="col-5 title-container">
              <h1 className="title-container__title">Weather Finder</h1>
              <h2 className="title-container__subtitle">
                Find out temperature, conditions and more...
              </h2>
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

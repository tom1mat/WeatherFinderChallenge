/* eslint-disable */
import React, { useState } from 'react';

import WeatherInfo from 'components/WeatherInfo';
import Form from 'components/Form';
import Container from 'components/Container';
import ErrorBoundary from 'components/ErrorBoundary'

import WeatherContext from 'WeatherContext';

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
    <ErrorBoundary>
      <WeatherContext>
        <main>
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
        </main>
      </WeatherContext>
    </ErrorBoundary>
  );
};

export default App;

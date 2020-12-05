import React from 'react';

import useWeatherService from 'hooks/useWeatherService';
import Button from 'components/Button';
import Input from 'components/Input';

const Form = () => {
  const { loading, fetchWeather } = useWeatherService();

  const onSubmit = (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value || 'Madrid';
    const country = event.target.elements.country.value || 'es';
    fetchWeather(city, country);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input type="text" name="city" placeholder="Madrid" />
      <Input type="text" name="country" placeholder="es" />
      <Button text="Get Weather" loading={loading} />
    </form>
  );
};

export default Form;

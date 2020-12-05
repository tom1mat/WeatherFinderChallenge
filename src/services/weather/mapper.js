export default (data) => ({
  temperature: data.main.temp,
  city: data.name,
  country: data.sys.country,
  humidity: data.main.humidity,
  description: data.weather[0].description,
});

import { useState, useEffect } from "react";
import axios from "axios";

import { ButtonBase, CardContainer, ClimaticList, Temperature } from "./styles";
import { CloudSun, Drop, MapPin, ThermometerSimple } from "phosphor-react";


import AOS from "aos";
import { NavLink } from "react-router-dom";
import { Home } from "../../pages/Home";
AOS.init();

type WeatherData = {
  speed_converter: number;
  temperature: number;
  humidity: number;
  wind: number;
};

type LocationData = {
  city: string;
  state: string;
  country: string;
};

export function CardLocator() {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [rainProbability, setRainProbability] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Capura a localização do usuário
        const locationResponse = await axios.get(
          "https://geolocation-db.com/json/"
        );
        const { city, state, country_name } = locationResponse.data;

        // Captura as iformações climáticas do local
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country_name}&appid=bb5e44564bd28ff1419f2324681b2c09&units=metric&lang=pt_br`
        );

        const { temp, humidity } = weatherResponse.data.main;
        const { speed } = weatherResponse.data.wind;
        const speed_converter = speed * 3.6;

        setWeatherData({
          temperature: temp,
          humidity,
          wind: speed,
          speed_converter
        });

        setLocationData({
          city,
          state,
          country: country_name,
        });

        function calculateRainProbability(temp: number, humidity: number, speed: number): number {

          // Calcula probabilidade de chuva usando a temperatura, velocidade dos ventos e umidade.

          const probability = Math.round((humidity / 2 + speed / 10 + (35 - temp) / 5) * 10) / 10;
          return probability;
        }

        setRainProbability(calculateRainProbability(temp, humidity, speed));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  if (!weatherData || !locationData || !rainProbability) {
    return (
      <CardContainer data-aos="flip-left" >
        <h2>Carregando seus dados...</h2>
        <p>Certifique-se que a localização do seu dispositivo esteja ativada.</p>
      </CardContainer>)
  }

  return (
    <CardContainer >

      <h2 data-aos="fade-left" data-aos-delay="1000" data-aos-offset="100">
        <MapPin size={18} />
        {locationData.city}, {locationData.state}, {locationData.country}
      </h2>

      <CloudSun size={160} data-aos="fade-up" />

      <ClimaticList data-aos="zoom-in">
        <Temperature>{weatherData.temperature.toFixed(0)}°<ThermometerSimple size={55} /></Temperature>
        <div>
          <li>Humidade: {weatherData.humidity}%</li>
          <li>Ventos: {weatherData.speed_converter.toFixed(0)} km/h</li>
        </div>
        <li>Precipitação: {rainProbability.toFixed(0)}% <Drop size={15} /> </li>
      </ClimaticList>
      <ButtonBase>
      <a href="/" >RECARREGAR</a>
      </ButtonBase>
    </CardContainer>
  );
}




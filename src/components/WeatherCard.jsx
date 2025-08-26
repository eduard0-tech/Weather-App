import React from 'react';
import './WeatherCard.css';

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  // 1. EXTRAINDO OS NOVOS DADOS DA API
  const { name, localtime } = weatherData.location;
  const {
    temp_c,
    humidity,
    condition,
    feelslike_c,
    wind_kph,
    uv,
    pressure_mb,
    vis_km
  } = weatherData.current;

  const time = new Date(localtime).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="weather-card-google">
      <div className="card-header">
        <div>
          <h1>{name}</h1>
          <p>{time}</p>
        </div>
        <p className="description">{condition.text}</p>
      </div>

      <div className="main-info">
        <img src={condition.icon} alt={condition.text} />
        <p className="temperature">{Math.round(temp_c)}°</p>
      </div>

      {/* Primeira fileira de detalhes */}
      <div className="details-grid">
        <div className="detail-item">
          <span className="value">{Math.round(feelslike_c)}°</span>
          <span className="label">Sensação</span>
        </div>
        <div className="detail-item">
          <span className="value">{Math.round(wind_kph)} km/h</span>
          <span className="label">Vento</span>
        </div>
        <div className="detail-item">
          <span className="value">{humidity}%</span>
          <span className="label">Umidade</span>
        </div>
      </div>

      {/* 2. NOVA FILEIRA DE DETALHES ADICIONADA AQUI */}
      <div className="details-grid">
        <div className="detail-item">
          <span className="value">{uv}</span>
          <span className="label">Índice UV</span>
        </div>
        <div className="detail-item">
          <span className="value">{Math.round(pressure_mb)} hPa</span>
          <span className="label">Pressão</span>
        </div>
        <div className="detail-item">
          <span className="value">{vis_km} km</span>
          <span className="label">Visibilidade</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
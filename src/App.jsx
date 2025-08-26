import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const city = 'Fortaleza';
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // Essa parte já estava correta!
    const fetchWeatherData = async () => {
      if (!apiKey) {
        setError("Chave da API não encontrada. Verifique o arquivo .env.local");
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`
        );
        if (!response.ok) {
          throw new Error('Cidade não encontrada ou erro na rede.');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  // A parte de renderização precisa ser esta:
  return (
    <div className="weather-container">
      {loading && <div>Carregando... 🌦️</div>}
      {error && <div>Erro: {error}</div>}
      {!loading && !error && weatherData && (
        // Usamos o componente WeatherCard, que sabe como ler os dados da nova API
        <WeatherCard weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
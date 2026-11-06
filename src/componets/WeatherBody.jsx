import "./WeatherBody.css";

const current = {
  city: "Whistler, BC",
  icon: "🌨️",
  temp: "24°F",
  description: "Light snow",
  wind: "12 mph",
  humidity: "70%",
};

const forecast = [
  { day: "Tue", icon: "❄️", high: "26°F", low: "18°F", note: "Heavy snow" },
  { day: "Wed", icon: "☁️", high: "28°F", low: "20°F", note: "Cloudy" },
  { day: "Thu", icon: "☀️", high: "30°F", low: "19°F", note: "Sunny" },
  { day: "Fri", icon: "🌨️", high: "27°F", low: "17°F", note: "Flurries" },
  { day: "Sat", icon: "❄️", high: "22°F", low: "14°F", note: "Snow" },
];

function WeatherBody() {
    return (
    <section className="weather-current">
      <h2>{current.city}</h2>
      <div className="weather-icon">{current.icon}</div>
      <p className="current-temp">{current.temp}</p>
      <p className="current-desc">{current.description}</p>

      <div className="current-details">
        <p>Wind: {current.wind}</p>
        <p>Humidity: {current.humidity}</p>
      </div>

      <div className="forecast">
        {forecast.map((d) => (
          <div className="forecast-card" key={d.day}>
            <h3>{d.day}</h3>
            <div className="weather-icon small">{d.icon}</div>
            <p className="card-temp">{d.high} / {d.low}</p>
            <p>{d.note}</p>
          </div>
        ))}
      </div>
    </section>
    );
}

export default WeatherBody;
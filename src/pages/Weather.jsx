import NavBar from '../componets/Navbar.jsx';
import WeatherBody from "../componets/WeatherBody.jsx";

function Weather({onSearch,search}) {
    return (
        <>
            <NavBar onSearch={onSearch}/>
            <WeatherBody />
        </>
    );
}

export default Weather;
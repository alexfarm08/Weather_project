import NavBar from '../componets/NavBar.jsx';
import WeatherBody from "../componets/WeatherBody.jsx";

function Weather({onSearch,search}) {
    return (
        <NavBar onSearch={onSearch}/>
        <WeatherBody />
    );
}
import Navbar from '../componets/Navbar.jsx';
import HomeBody from '../componets/HomeBody.jsx';

function HomePage({onSearch,search}) {
    
    return (
        <>
            <Navbar onSearch={onSearch}/>
            <HomeBody />
        </>
    );
}

export default HomePage;
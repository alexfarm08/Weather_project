import Navbar from '../componets/Navbar.jsx';

function HomePage({onSearch,search}) {
    
    return (
        <>
            <Navbar onSearch={onSearch}/>
        </>
    );
}

export default HomePage;
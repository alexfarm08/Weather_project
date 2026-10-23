import Navbar from '../componets/Navbar.jsx';
import AboutBody from '../componets/AboutBody.jsx';

function AboutPage({onSearch,search}) {
    
    return (
        <>
            <Navbar onSearch={onSearch}/>
            <AboutBody />
        </>
    );
}

export default AboutPage;
import Button from "./Button.jsx";
import SearchInput from "./SearchInput.jsx"

function Navbar({onSearch}) {
    return (
        <div className="navbar">
            <div className="navTitle">
                <h1>Weather Project</h1>
            </div>
            <div>
                <SearchInput handleSearch={onSearch}/>
            </div>
            <div className="navButtons">
                <Button text="Home"/>
                <Button text="About"/>
            </div>
        </div>
    )
}

export default Navbar; 
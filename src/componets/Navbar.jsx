import Button from "./Button.jsx";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navTitle">
                <h1>Weather Project</h1>
            </div>
            <div className="navButtons">
                <Button text="Home"/>
                <Button text="About"/>
            </div>
        </div>
    )
}

export default Navbar; 
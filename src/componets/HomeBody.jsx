import hero from "../assets/snow-mount.jpg";

function HomeBody() {
    return (
        <section className="homeBody">
            <img src={hero} alt="Snow coverd mountians" className="hero-img"/>
            <p>Search any mountain town for your next powder day.</p>
        </section>
    );
}

export default HomeBody;
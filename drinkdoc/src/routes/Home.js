import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home (){
    return (
        <>
        <Navbar />
        <Hero 
        cName="hero"
        title="Wanna start a session?"
        text="Let's get started"
        btnText="Start Session"
        url="/session"
        btnClass="show"
        />
        </>
    )
}

export default Home;
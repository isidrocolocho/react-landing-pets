import Banner from "../components/Banner";
import Adopt from "../components/Adopt";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
const LandingPets = ()=>{
    const banner = 'A smarter pet pharmacy';
    const adopting = 'Adopt Now';
    const services = 'Our Services';
    const reviews = 'Reviews';
    return(
        <main>
            <Banner title={banner}/>
            <Adopt title={adopting}/>
            <Services title={services}/>
            <Reviews title={reviews}/>
        </main>
    )
};

export default LandingPets;
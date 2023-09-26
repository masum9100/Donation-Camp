import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DonationCard from "./DonationCard";


const Home = () => {

    const cards = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            {Array.isArray(cards) && <DonationCard cards={cards}></DonationCard>}
            

        </div>

    );
};

export default Home;
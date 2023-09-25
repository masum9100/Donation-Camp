import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DonationCard from "./DonationCard";


const Home = () => {

    const cards = useLoaderData()
    console.log(cards)
    return (
        <div>
            <Banner></Banner>
            <DonationCard cards={cards}></DonationCard>

        </div>

    );
};

export default Home;
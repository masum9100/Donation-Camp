
import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import DonationCard from "./DonationCard";

const Home = () => {
    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch("./data.json")
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    return (
        <div>
            <Banner onSearch={handleSearch} />
            {Array.isArray(cards) && <DonationCard cards={cards} searchQuery={searchQuery} />}
        </div>
    );
};

export default Home;

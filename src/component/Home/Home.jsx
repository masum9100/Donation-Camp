import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import DonationCard from "./DonationCard";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    
    fetch("./data.json")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Banner />
      {Array.isArray(cards) && <DonationCard cards={cards} />}
    </div>
  );
};

export default Home;

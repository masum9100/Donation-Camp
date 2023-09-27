
import SingleCard from "./SingleCard";

const DonationCard = ({ cards, searchQuery }) => {
    const filteredCards = searchQuery
        ? cards.filter(card => card.category.toLowerCase().includes(searchQuery.toLowerCase()))
        : cards;

    return (
        <div className="max-w-screen-xl mx-auto my-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
                {
                    Array.isArray(filteredCards) && filteredCards.length > 0 && filteredCards.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default DonationCard;

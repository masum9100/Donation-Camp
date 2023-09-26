import SingleCard from "./SingleCard";


const DonationCard = ({cards}) => {
    



    return (
        <div className="max-w-screen-xl mx-auto my-16">
           
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
                {
                  Array.isArray(cards) && cards?.map(card=> <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default DonationCard;
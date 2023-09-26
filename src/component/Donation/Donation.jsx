import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donationItem, setDonationItem] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donated'));
        if (donationItems) {
            setDonationItem(donationItems);
        } else {
            setNotFound("You Didn't Donate Yet");
        }
    }, []);

    const handleDataClean = () => {
        localStorage.clear();
        setDonationItem([]);
        setNotFound("You Didn't Donate Yet");
    }

    

    return (
        <div className="max-w-screen-xl mx-auto mt-16">
            {notFound ? (
                <p className="flex justify-center rounded-full items-center h-[50vh] text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-5">
                    {notFound}
                </p>
            ) : (
                <div>
                    {donationItem.length > 0 && (
                        <div className="flex justify-center">
                            <button onClick={handleDataClean} className="px-3 py-1 bg-gray-200 text-white rounded-md">Clear Browser Data</button>
                        </div>
                    )}
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mx-auto my-16">
                        {seeAll ? (
                            donationItem.map((card) => (
                                <DonationCard key={card.id} card={card} />
                            ))
                        ) : (
                            donationItem.slice(0, 4).map((card) => (
                                <DonationCard key={card.id} card={card} />
                            ))
                        )}
                    </div>
                    {!seeAll && donationItem.length > 4 && (
                        <div className="flex justify-center mb-16">
                            <button onClick={() => setSeeAll(!seeAll)} className="px-4 py-2 bg-[#029444] text-white rounded-md text-lg font-semibold">See All</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Donation;

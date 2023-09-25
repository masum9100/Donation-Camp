import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import OneCard from "./onecard";


const CardDetails = () => {

    const [card, setCard] = useState()

    const { id } = useParams()

    const cards = useLoaderData()

    useEffect(() => {
        const findCard = cards?.find(card => card.id === id)
        setCard(findCard)
    }, [id, cards])
    

    return (
        <div className="max-w-screen-xl mx-auto mt-24 px-5">
            <OneCard card={card}></OneCard>

        </div>
    );
};

export default CardDetails;
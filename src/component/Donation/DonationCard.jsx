const DonationCard = ({ card }) => {

    const { id, image, title, category, category_bg_color, card_bg_color, font_color, description, price, donate_image } = card || {}

    const categoryStyle = {
        backgroundColor: category_bg_color,
        color: font_color
    };
    const fontColor = {
        color: font_color
    };
    const buttonColor = {
        backgroundColor: font_color,
    };
    const cardBG = {
        backgroundColor: card_bg_color,
    };


    return (
        <div className="flex justify-between mx-auto max-w-screen-xl">
            <div className="flex w-full h-52 rounded-xl px-2">
                <div>
                    <img className="h-full" src={donate_image} alt="" />
                </div>
                <div className="">
                    <div style={cardBG} className="h-full w-60 md:w-96 rounded-r-xl pl-2 md:pl-5 text-left">
                        <h2 style={categoryStyle} className="py-1 px-2 bg-slate-500 inline-block rounded font-normal text-sm mt-5 ">{category}</h2>
                        <h2 className="text-lg font-medium md:text-2xl md:font-semibold mt-3">{title}</h2>
                        <p style={fontColor} className="text-lg font-semibold mt-3">${price}</p>
                        <button style={buttonColor} className="text-white text-base font-medium md:text-lg md:font-semibold px-3 py-2 rounded mt-3">View Details</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;

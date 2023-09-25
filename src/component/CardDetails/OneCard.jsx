

const OneCard = ({ card }) => {

    const { id, image, title, category, category_bg_color, card_bg_color, font_color, description, price } = card || {}

    const buttonBg = {
        backgroundColor: font_color
    };

    return (
        <div className="my-16">
            <div className="relative ">
                <img className="w-full rounded-3xl " src={image} alt="" />
                <div className="absolute bottom-0 rounded-bl-3xl rounded-br-3xl left-0 w-full h-24 bg-black bg-opacity-50"></div>
                <button style={buttonBg} className="absolute bottom-0 left-0 text-white px-4 py-2 z-10 rounded-md m-5">
                    Donate ${price}
                </button>
            </div>
            <h1 className="text-4xl font-bold mt-7">{title}</h1>
            <p className="font-normal text-base mt-5">{description}</p>
        </div>
    );
};

export default OneCard;
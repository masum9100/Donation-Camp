import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
    const { id, image, title, category, category_bg_color, card_bg_color, font_color } = card || {}

    const cardStyles = {
        backgroundColor: card_bg_color
    };
    const categoryStyle = {
        backgroundColor: category_bg_color,
        color: font_color

    };
    const fontColor = {
        color: font_color
    }

    return (
        <Link to={`/donation/${id}`}>
        <div className="flex justify-center">
            <button className="">
                <div className="card card-compact w-88" style={cardStyles}>
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="text-left m-4">
                        <h2 style={categoryStyle} className="py-1 px-2 bg-slate-500 inline-block rounded">{category}</h2>
                        <p style={fontColor} className="mt-2">{title}</p>
                    </div>
                </div>
            </button>
        </div>
        </Link>
    );
};


export default SingleCard;
import Star from "./Star"
import {useState} from 'react';

function StarRating() {
    const [selectedStar, setSelectedStar] = useState(null)
    let ratingText;
    const starsArray = []
    for (let i=1; i<6; i++) { starsArray.push(i) }

    const printRatingText = (starId) => {
        setSelectedStar(starId)
    }

    switch (selectedStar) {
        case 1: 
            ratingText = "Too Bad"
            break;
        case 2:
            ratingText = "Not Bad"
            break;
        case 3:
            ratingText = "Acceptable"
            break;
        case 4:
            ratingText = "Good"
            break;
        case 5:
            ratingText = "Excellent"
            break;
        default:
            ratingText = "No rating selected"
            break;
    }

    return (
    <div className="container">
        <section className="rating-section">
            <div className="stars-row">
                {starsArray.map((star) => {
                    return (
                        <>
                            <Star key={star} id={star} clickHandler={printRatingText} clicked={selectedStar >= star}/>
                        </>
                    )
                })}
            </div>
            <h2>{ratingText}</h2>
        </section>
    </div>
    )
}

export default StarRating
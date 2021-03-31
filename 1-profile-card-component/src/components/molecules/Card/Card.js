import React from 'react'
import './Card.scss'

import bgPatternCard from '../../../images/bg-pattern-card.svg'
import victor from '../../../images/image-victor.jpg'

const Card = ({ cardData }) => {
    console.log(cardData);
    const { name, age, location, followers, fLabel, likes, lLabel, photos, pLabel } = cardData
    return (
        <>
            <div className="card">
                <img src={bgPatternCard} alt="" className="card__bg-pattern" />
                <img src={victor} alt="" className="card__avatar-img" />
                <div className="card__details">
                    <span className="card__details-name">{name}</span>
                    <span className="card__details-age">{age}</span>
                    <p className="card__details-location">{location}</p>
                </div>
                <div className="card__divider"></div>
                <div className="card__stats">
                    <div className="card__stats-group">
                        <p className="card__stats-number">{followers}</p>
                        <p className="card__stats-label">{fLabel}</p>
                    </div>
                    <div className="card__stats-group">
                        <p className="card__stats-number">{likes}</p>
                        <p className="card__stats-label">{lLabel}</p>
                    </div>
                    <div className="card__stats-group">
                        <p className="card__stats-number">{photos}</p>
                        <p className="card__stats-label">{pLabel}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

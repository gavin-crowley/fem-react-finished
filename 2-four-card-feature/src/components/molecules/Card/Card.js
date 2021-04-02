import React from 'react'
import './Card.scss'

const Card = ({ cardData }) => {
    const { title, text, image, color } = cardData
    return (
        <>
            <div className={`card ${color}`}>
                <h2 className="card__heading">{title}</h2>
                <p className="card__text">
                    {text}
                </p>
                <img src={image} alt="" className="card__img" />
            </div>
        </>
    )
}

export default Card

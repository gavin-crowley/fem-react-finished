import React from 'react'
import './FourCard.scss'

import Card from '../../components/molecules/Card/Card'

import { cardData } from '../../data/data'


const FourCard = () => {
    return (
        <main>
            <header>
                <h1 className="h1--light">Reliable, efficient delivery</h1>
                <h1 className="h1--bold">Powered by Technology</h1>
                <p className="sub-heading">
                    Our Artificial Intelligence powered tools use millions of project data
                    points to ensure that your project is successful</p>
            </header>

            <div className="container">
                {cardData.map(card =>
                    <Card cardData={card} />
                )}
            </div>
        </main>
    )
}

export default FourCard

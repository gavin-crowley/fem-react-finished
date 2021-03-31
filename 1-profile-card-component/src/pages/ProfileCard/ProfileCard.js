import React from 'react'
import './ProfileCard.scss'

import bgPatternTop from '../../images/bg-pattern-top.svg'
import bgPatternBottom from '../../images/bg-pattern-bottom.svg'

import Card from '../../components/molecules/Card/Card'

import { cardData } from '../../data/data'


const ProfileCard = () => {
    return (
        <>
            <img src={bgPatternTop} alt="" className="bg-img-top" />
            <img src={bgPatternBottom} alt="" className="bg-img-bottom" />
            <Card cardData={cardData} />
        </>
    )
}

export default ProfileCard

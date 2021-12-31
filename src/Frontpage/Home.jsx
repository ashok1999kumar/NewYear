import React from 'react'
import { Banner } from './Banner'
import CardData from './CardData'
import {HomePageCard} from './HomePageCard'
export const Home = () => {
    return (
        <div>
            <Banner/>
            <HomePageCard cheader={CardData[0].CardHeading} cpara={CardData[0].CardPara} Cimage={CardData[0].CardiImage}/>  
        </div>
    )        
}

    
    
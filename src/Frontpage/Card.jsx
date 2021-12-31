import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
const CardContainer = Styled.div`
    width:80%;
    display:flex;
    align-items:center;
    @media(max-width:748px){
        display:inline;
        background:green;
        color:blue;
        border:1px solid black;
    }
`
const CardImage = Styled.div`
    width:30%;
    padding:.5rem;
    @media(max-width:748px){
        width:80%;
    }
`
const CardData = Styled.div`
    width:70%;  
    padding:1.5rem;
`
const CardHeading = Styled.div`

`
const CardTitle = Styled.div`

`
const CardButton = Styled.div`
    margin-top:1rem;
`
const Img = Styled.img`

`
const H1 = Styled.h1`

`
const Para = Styled.p`

`
const CardBtn = Styled.button`
    background:green;
    padding:.5rem;
    border-radius:10px;
    width:150px;
    @media(max-width:748px){
        background:red;
    }

`


export const Card = (Props) => {
    return (
            <CardContainer className='card'>
                <CardImage className='card-image'>
                    <Img src='' alt='image'/>
                </CardImage>
                <CardData>
                    <CardHeading className='card-heading'>
                        <H1>Node</H1>
                    </CardHeading>
                    <CardTitle>
                        <Para>
                            Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
                        </Para>
                    </CardTitle>
                    <CardButton>
                    <Link to="./Nav">click me</Link>
                    </CardButton>
                </CardData>
            </CardContainer>
    )
}

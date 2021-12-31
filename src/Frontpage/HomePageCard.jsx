import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import styled from 'styled-components'
import CardData from './CardData'
const CardDiv = styled.div`
    width:25%;
    height:auto;
    padding:20px;
    margin:20px;
    box-shadow:1px 1px 20px 0px #a7b0b3;
`
const CardHeading = styled.div`
`
const H1 = styled.h1`
`
const Para = styled.p`
`
const CardFooter = styled.div`
`
const Hr = styled.hr`
`
const Btn = styled.button`
    background:green;
    padding:10px;
    border-radius:6px;
    margin-top:10px;
`
export const HomePageCard = (props) => {
    return (
        <CardDiv>
            <CardHeading>
                <H1>{props.cheader}</H1>
                <Hr/>
            </CardHeading>
            <CardFooter>
                <Para>{props.cpara}</Para>
                <Link to="./Nav">click me</Link>
            </CardFooter>
        </CardDiv>
    )
}

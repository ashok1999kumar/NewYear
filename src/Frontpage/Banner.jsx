import React from 'react'
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import './Style.css'
import MenuData from './MenuData';
import { useHistory } from 'react-router-dom' 
const Container = Styled.div``
const Banners = Styled.div`
    background-color:black;
    width:100%;
`
const H1 = Styled.h1`
    color:white;
    padding:2rem;
`
const NavDiv = Styled.div``
const Ol = Styled.ul`
    display:flex;
    padding:20px;
    
`
const Li = Styled.li`
    padding:10px;
    font-size:1.5rem;
`
export const Banner = () => {
    return (
       <>
        <Container>
            <Banners>
                <Ol>
                    {
                        MenuData.map((cvalue)=>{return <Li><Link to={cvalue.data} element={cvalue.data} style={{color:'white', textDecoration:'none'}}>{cvalue.data}</Link></Li>})
                    }
                </Ol>
            </Banners>
        </Container>
       </>  
    )
}

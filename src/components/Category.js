import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Category = () => {
    return (
        <CategoryStyle>
            <NavLink to={'/cuisine/Italian'} >
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={'/cuisine/Korean'}>
                <GiChopsticks />
                <h4>Korean</h4>
            </NavLink>
        </CategoryStyle >
    )
}


const CategoryStyle = styled.div`
    display: flex;
    justify-content: center;    
    justify-content: space-between;
    margin: 2rem 0rem;
    
    
    `

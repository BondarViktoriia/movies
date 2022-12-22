import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TrendingMoviesList = styled.ul`
display: flex;
    flex-wrap: wrap;
    gap: 16px;
    list-style: none;
    padding: 0px;
    margin: 0px;
    justify-content: center;

`
export const TrendingMoviesItem = styled.li`
flex-basis: calc((100% - 60px) / 4);
    width: 320px;
    height:480px;
    border-radius: 10px;
    transition-property: box-shadow, transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.075, 0.82,  0.165, 1);
   background: rgb(255,0,44);
background: linear-gradient(90deg, rgba(255,0,44,1) 11%, rgba(2,0,36,1) 99%);

    `
export const TrendingMoviesImg = styled.img`
  width:100%;
    height: 398px;
    object-fit: cover;
    border-radius: 5px;
`
export const TrendingMoviesText = styled.p`
margin: 0;
padding:10px;
font-weight:bold;
text-decoration:none;

`
export const TrendingMoviesData = styled.p`
margin:0;
font-weight:bold;
text-decoration:none;
padding:0px 10px 0px 10px;
`
export const TrendingLink = styled(NavLink)`
text-decoration:none;
color:black
`

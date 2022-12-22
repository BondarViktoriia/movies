import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
display:flex;
justify-content: center;
`
export const DetailsContainer = styled.div`
 width: 500px;
 margin-left: 40px;
 padding:20px;
`
export const GoBack = styled(NavLink)`
display: flex;
justify-content: center;
text-decoration: none;
color:black;
text-transform:uppercase;
text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 24px;
width: 110px;
margin: auto;
margin-bottom: 30px;

  &.active{
    color:white;
    background: rgb(27,28,29);
background: radial-gradient(circle, rgba(27,28,29,1) 0%, rgba(212,19,33,1) 100%);
  }

  :hover:not(.active),
  :focus-visible:not(.active){
        color:white;
        background: rgb(27,28,29);
background: radial-gradient(circle, rgba(27,28,29,1) 0%, rgba(212,19,33,1) 100%);

  }
`
export const MovieDetailsImg = styled.img`
object-fit: cover;
    border-radius: 30px;
`

export const MovieDetailsTitle = styled.h2`
font-size:30px;
font-weight:bold;
margin: 0;
margin-bottom: 20px;
`
export const MovieDetailsDiscription = styled.p`

font-size:20px;
margin: 0;
margin-bottom: 20px;
 span{
    font-weight: bold;
}
`

export const MovieDetailsAdditional = styled.h2`
font-size:30px;
font-weight:bold;
margin: 0;
margin-bottom: 20px;
text-transform: uppercase;
`
export const AdditionalContainer = styled.div`
display: block;
justify-content: center;
margin-top:30px;
text-align:center;
`
export const AdditionalList = styled.ul`
display: flex;
    justify-content: center;
`
export const AdditionalLink = styled(NavLink)`
 width: 120px;
 height: 40px;

 margin-right:20px;
 text-decoration: none;
 text-transform:uppercase;
 color:black;
text-align:center;
margin-bottom:30px;

  &.active{
    color:white;
    background: rgb(27,28,29);
background: radial-gradient(circle, rgba(27,28,29,1) 0%, rgba(212,19,33,1) 100%);
  }

  :hover:not(.active),
  :focus-visible:not(.active){
        color:white;
        background: rgb(27,28,29);
background: radial-gradient(circle, rgba(27,28,29,1) 0%, rgba(212,19,33,1) 100%);

  }

`
import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 16px;
`
export const Input = styled.input`
    padding: 10px;
    width: 500px;
    height: 26px;
    font-weight: 700;
 

`
export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
      background: rgb(255,0,44);
    background: linear-gradient( 90deg, rgba(255,0,44,1) 11%, rgba(2,0,36,1) 99% );
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    color:white;
    text-transform: uppercase;
`
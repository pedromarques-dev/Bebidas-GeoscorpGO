import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    padding: 10px;
    background-color: #ef5350;
    color: white;

    h2, li {
        cursor: pointer;
    }

    ul {
        display: flex;
    }

    li {
        padding: 15px;
        font-size: 20px;
        border-radius: 10px;
        transition: 0.3s ease-in-out;
    }

    li:hover{
        background-color: white;
    }

    li:hover a{
        color: #ef5350;
    }

    @media(max-width: 525px){
        flex-wrap: wrap;    
    } 

`
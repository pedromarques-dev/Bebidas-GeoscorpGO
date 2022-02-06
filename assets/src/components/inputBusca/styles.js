import styled from "styled-components"

export const Pesquisa = styled.div`
    text-align: center;
    margin: 20px;

    input {
        width: 40%;
        padding: 8px;
        border: 1px solid black;
        border-radius: 20px;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.322);
    }

    button {
        position: relative;
        left: -25px;
    }

    @media(max-width: 992px) {
        input {
            width: 60%;
        }
    }

    @media(max-width: 425px) {
        input {
            width: 80%;
        }
    }

`
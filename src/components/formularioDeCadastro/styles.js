import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;


    h2 {
        margin: 15px 0;
    }


    input {
        padding: 14px;
        width: 600px;
        border: 1px solid black;
    }

    button {
        padding: 20px 56px;
        margin-top: 10px;
        background-color:  red;
        border: 1px solid black;
        color: white;
        border-radius: 5px;
        font-weight: 600;
        font-size: 20px;
        cursor: pointer;
        float: right;
    }

    @media (max-width: 620px){
        div {
            width: 80%;
        }

        input {
            width: 100%;
        }

        button {
            width: 100%;
        }

    }
    @media (max-width: 425px){
    }
`
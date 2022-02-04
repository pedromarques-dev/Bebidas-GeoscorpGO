import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Card = styled.div`
    border: 1px solid black;
    width: 300px;
    min-height: 320px;
    padding: 20px;
    margin: 40px;
    text-align: center;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.300);
    position: relative;

    h3 {
        margin: 10px;
    }

    p {
        padding: 10px;
        word-wrap: break-word
    }

    button {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    i{
        color: red;
    }

`
export { Section, Card }
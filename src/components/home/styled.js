import styled from "styled-components";
import background from "../../assets/background.jpg"

export const Home = styled.section`
    height: 100vh;
    background: url(${background}) no-repeat center center / cover;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
`
export const HomeText = styled.main`

`
export const H1 = styled.h1`
    font-size: var(--big-font);
    font-family: 'Leckerli One', cursive;
    font-weight: 700;
    color: var(--2nd-color);
    line-height: 1.4em;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
        font-size: 3rem;
    }

    @media (max-width: 380px) {
        font-size: 2.3rem;
    }
`
export const H3 = styled.h3`
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--other-color);

    @media (max-width: 600px) {
        font-size: 1.1rem;
    }

    @media (max-width: 380px) {
        font-size: 15px;
    }
`
export const Button = styled.a`
    margin-top: 2.5rem;
    padding: 1.22rem 2.1rem;
    background-color: var(--main-color);
    border: none;
    border-radius: 2rem;
    font-size: 14px;
    font-weight: 500;
    color: var(--background);
    text-transform: uppercase;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #3f3f3f;
    }
`
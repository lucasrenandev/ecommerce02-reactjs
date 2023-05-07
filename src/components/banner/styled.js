import styled from "styled-components";

export const Banner = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    align-items: center;
    gap: 2rem;

    @media (max-width: 380px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    }
`
export const Card = styled.figure`
    overflow: hidden;
`
export const Image = styled.img`
    width: 100%;
    height: auto;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.1);
    }
`
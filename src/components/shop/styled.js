import styled from "styled-components";

export const Shop = styled.section`

`
export const ShopContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    align-items: center;
    text-align: center;
    gap: 2.5rem;
    margin-top: 4.5rem;

    @media (max-width: 380px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    }
`
export const Box = styled.figure`
    position: relative;

    &:hover a {
        opacity: 1;
    }
`
export const Image = styled.img`
    width: 100%;
    height: auto;
`
export const H4 = styled.h4`
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: var(--text-color);
    text-transform: uppercase;
    margin: 20px 0 8px;
`
export const H5 = styled.h5`
    font-size: 20px;
    font-weight: 600;
    color: var(--other-color);
    line-height: 1;
    letter-spacing: 1px;
`
export const Link = styled.a`
    position: absolute;
    content: '';
    bottom: 4.1rem;
    right: 0;
    left: 0;
    width: 100%;
    background-color: var(--text-color);
    color: var(--background);
    font-size: 1rem;
    font-weight: 400;
    padding: 13px;
    opacity: 0;
    transition: opacity 0.5s ease;
`
export const H6 = styled.h6`
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    padding: 6px 20px;
    background-color: var(--main-color);
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--background);
`
import styled from "styled-components";

export const News = styled.section`

`
export const NewContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    align-items: center;
    gap: 2.5rem;
    margin-top: 4.5rem;

    @media (max-width: 380px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    }
`
export const Box = styled.div`

`
export const NewImage = styled.figure`
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
export const NewDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1rem;
`
export const H6 = styled.h6`
    font-size: 15px;
    font-weight: 500;
    color: var(--other-color);
`
export const NewIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`
export const Icon = styled.i`
    color: var(--other-color);
    font-size: 22px;
    display: inline-flex;
    align-items: center;
`
export const Number = styled.span`
    color: var(--other-color);
    font-size: 15px;
    font-weight: 500;
`
export const H5 = styled.h5`
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 500;
    color: var(--text-color);
    line-height: 1.3;
    transition: color 0.5s ease;

    &:hover {
        color: var(--main-color);
    }
`
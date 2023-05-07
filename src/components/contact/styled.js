import styled from "styled-components";

export const Contact = styled.section`
    background-color: #272829;
`
export const ContactContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    align-items: flex-start;
    gap: 2.5rem;
`
export const Box = styled.div`

`
export const H5 = styled.h5`
    color: var(--background);
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    white-space: nowrap;
`
export const NavBar = styled.nav`

`
export const NavList = styled.ul`

`
export const List = styled.li`
    margin-bottom: 1.5rem;
`
export const Link = styled.a`
    color: #999;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    transition: transform 0.5s ease;

    &:hover {
        color: var(--main-color);
        transform: translateX(-7px);
    }
`
export const H6 = styled.h6`
    color: #999;
    font-size: 1rem;
    font-weight: 600;
`
export const Icons = styled.div`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.3rem;
`
export const Icon = styled.i`
    width: 40px;
    height: 40px;
    border: 2px solid var(--main-color);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--main-color);
    font-size: 20px;
    transition: all 0.5s ease;

    &:hover {
        background-color: var(--main-color);
        color: var(--background);
        transform: scale(1.1);
        cursor: pointer;
    }
`
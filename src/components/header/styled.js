import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background);
    padding: 20px 14%;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);

    @media (max-width: 1277px) {
        padding: 15px 2%;
        transition: all 0.5s ease;
    }
`
export const Logo = styled.a`

`
export const Image = styled.img`
    width: 120px;
    height: auto;
`
export const NavBar = styled.nav`
    @media (max-width: 940px) {
        position: absolute;
        top: -800px;
        left: 0;
        right: 0;
        width: 100%;
        background-color: var(--main-color);
        transition: top 0.5s ease;

        &.active {
            top: 100%;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media (max-width: 940px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const List = styled.li`
    padding: 0 10px;
    margin: 0 15px;

    .nav-link {
        color: var(--text-color);
        font-size: 15px;
        font-weight: 500;
        transition: color 0.5s ease;

        &:hover {
            color: var(--main-color);
        }

        @media (max-width: 940px) {
            display: block;
            font-size: 1.2rem;
            font-weight: 600;
            padding: 1rem;
        
            &:hover {
                color: var(--background);
                background-color: var(--2nd-color);
            }
        }
    }

    @media (max-width: 940px) {
        width: 100%;
        padding: 0;
        margin: 1rem 0;
    }
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`
export const Icon = styled.i`
    font-size: 25px;
    transition: all 0.5s ease;
    display: inline-flex;
    align-items: center;

    &:hover {
        color: var(--main-color);
        transform: translateY(-4px);
        cursor: pointer;
    }

    @media (max-width: 300px) {
        display: none;
    }
`
export const MenuIcon = styled.div`
    background-color: var(--text-color);
    color: var(--background);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    z-index: 1001;
    cursor: pointer;
    display: none;

    @media (max-width: 940px) {
        display: inline-flex;
    }
`
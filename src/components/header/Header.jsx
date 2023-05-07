import { Header, Logo, Image, NavBar, NavList, List,
Icons, Icon, MenuIcon } from "./styled";
import logo from "../../assets/logo.png"
import { HashLink as Link } from "react-router-hash-link";
import { BiShoppingBag } from "react-icons/bi"
import { BiPhone } from "react-icons/bi"
import { BiHeart } from "react-icons/bi"
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { useEffect, useRef, useState } from "react";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>)
    const navRef = useRef(null)

    const toggleMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(<IoClose/>)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        })
    }, [])

    return(
        <Header>
            <Logo href="/">
                <Image src={logo} alt="Logo"/>
            </Logo>

            <NavBar ref={navRef}>
                <NavList>
                    <List>
                        <Link className="nav-link" smooth to={"#home"}>Home</Link>
                    </List>

                    <List>
                        <Link className="nav-link" smooth to={"#pages"}>Pages</Link>
                    </List>

                    <List>
                        <Link className="nav-link" smooth to={"#shop"}>Shop</Link>
                    </List>

                    <List>
                        <Link className="nav-link" smooth to={"#portfolio"}>Portfolio</Link>
                    </List>

                    <List>
                        <Link className="nav-link" smooth to={"#news"}>News</Link>
                    </List>

                    <List>
                        <Link className="nav-link" smooth to={"#contact"}>Contact</Link>
                    </List>
                </NavList>
            </NavBar>

            <Icons>
                <Icon>
                    <BiShoppingBag/>
                </Icon>

                <Icon>
                    <BiPhone/>
                </Icon>

                <Icon>
                    <BiHeart/>
                </Icon>

                <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>
            </Icons>
        </Header>
    )
}
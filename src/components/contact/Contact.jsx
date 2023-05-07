import { Contact, ContactContent, Box, H5, NavBar,
NavList, List, Link, H6, Icons, Icon } from "./styled";
import { RiFacebookFill } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

export default function contact() {
    return(
        <Contact id="contact">
            <ContactContent>
                <Box>
                    <H5>My account</H5>

                    <NavBar>
                        <NavList>
                            <List>
                                <Link href="#">My account</Link>
                            </List>
                            <List>
                                <Link href="#">Checkout</Link>
                            </List>
                            <List>
                                <Link href="#">Contact us</Link>
                            </List>
                            <List>
                                <Link href="#">Shopping cart</Link>
                            </List>
                            <List>
                                <Link href="#">WishList</Link>
                            </List>
                        </NavList>
                    </NavBar>
                </Box>

                <Box>
                    <H5>Quick links</H5>

                    <NavBar>
                        <NavList>
                            <List>
                                <Link href="#">Store location</Link>
                            </List>
                            <List>
                                <Link href="#">Orders tracking</Link>
                            </List>
                            <List>
                                <Link href="#">Size guide</Link>
                            </List>
                            <List>
                                <Link href="#">My account</Link>
                            </List>
                            <List>
                                <Link href="#">FAQs</Link>
                            </List>
                        </NavList>
                    </NavBar>
                </Box>

                <Box>
                    <H5>Information</H5>

                    <NavBar>
                        <NavList>
                            <List>
                                <Link href="#">Privacy page</Link>
                            </List>
                            <List>
                                <Link href="#">About us</Link>
                            </List>
                            <List>
                                <Link href="#">Careers</Link>
                            </List>
                            <List>
                                <Link href="#">Delivery information</Link>
                            </List>
                            <List>
                                <Link href="#">Terms & conditions</Link>
                            </List>
                        </NavList>
                    </NavBar>
                </Box>

                <Box>
                    <H5>Customer service</H5>

                    <NavBar>
                        <NavList>
                            <List>
                                <Link href="#">Shipping policy</Link>
                            </List>
                            <List>
                                <Link href="#">Help & contact us</Link>
                            </List>
                            <List>
                                <Link href="#">Return & refunds</Link>
                            </List>
                            <List>
                                <Link href="#">Online stores</Link>
                            </List>
                            <List>
                                <Link href="#">Terms & conditions</Link>
                            </List>
                        </NavList>
                    </NavBar>
                </Box>

                <Box>
                    <H5>Fiama</H5>
                    <H6>Connect with us</H6>

                    <Icons>
                        <Icon>
                            <RiFacebookFill/>
                        </Icon>
                    
                        <Icon>
                            <FaInstagram/>
                        </Icon>
                
                        <Icon>
                            <FaTwitter/>
                        </Icon>
                    </Icons>
                </Box>
            </ContactContent>
        </Contact>
    )
}
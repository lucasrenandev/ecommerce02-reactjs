import { Portfolio, PortfolioContent, Box, Image,
H4, H5, Link, H6 } from "./styled";
import new1 from "../../assets/new-p1.png"
import new2 from "../../assets/new-p2.png"
import new3 from "../../assets/new-p3.png"
import new4 from "../../assets/new-p4.png"

export default function portfolio() {
    return(
        <Portfolio id="portfolio">
            <header className="header">
                <h2>Top products</h2>
            </header>

            <PortfolioContent>
                <Box>
                    <Image src={new1} alt="New 1"/>
                    <H4>Pink flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new2} alt="New 2"/>
                    <H4>Pink flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new3} alt="New 3"/>
                    <H4>Pink flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new4} alt="New 4"/>
                    <H4>Pink flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>
            </PortfolioContent>
        </Portfolio>
    )
}
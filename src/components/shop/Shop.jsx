import { Shop, ShopContent, Box, Image,
H4, H5, Link, H6 } from "./styled";
import new1 from "../../assets/new-p1.png"
import new2 from "../../assets/new-p2.png"
import new3 from "../../assets/new-p3.png"
import new4 from "../../assets/new-p4.png"
import new5 from "../../assets/new-p5.png"
import new6 from "../../assets/new-p6.png"
import new7 from "../../assets/new-p7.png"
import new8 from "../../assets/new-p8.png"

export default function shop() {
    return(
        <Shop id="shop">
            <header className="header">
                <h2>New arrival items</h2>
            </header>

            <ShopContent>
                <Box>
                    <Image src={new1} alt="New 1"/>
                    <H4>Pick flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new2} alt="New 2"/>
                    <H4>Pick flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new3} alt="New 3"/>
                    <H4>Pick flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new4} alt="New 4"/>
                    <H4>Pick flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new5} alt="New 5"/>
                    <H4>Pick flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new6} alt="New 6"/>
                    <H4>Pick flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new7} alt="New 7"/>
                    <H4>Pick flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>

                <Box>
                    <Image src={new8} alt="New 8"/>
                    <H4>Pick flower tree</H4>
                    <H5>$18.00</H5>
                    <Link href="#">Add to cart</Link>
                    <H6>Hot</H6>
                </Box>
            </ShopContent>
        </Shop>
    )
}
import { Banner, Card, Image } from "./styled";
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"

export default function banner() {
    return(
        <Banner id="pages">
            <Card>
                <Image src={banner1} alt="Banner 1"/>
            </Card>

            <Card>
                <Image src={banner2} alt="Banner 2"/>
            </Card>

            <Card>
                <Image src={banner3} alt="Banner 3"/>
            </Card>

            <Card>
                <Image src={banner1} alt="Banner 1"/>
            </Card>
        </Banner>
    )
}
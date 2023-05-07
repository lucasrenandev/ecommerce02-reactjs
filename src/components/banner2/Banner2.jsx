import { BannerTwo, Box, Image } from "./styled";
import banner4 from "../../assets/banner4.jpg"
import banner5 from "../../assets/banner5.jpg"

export default function bannerTwo() {
    return(
        <BannerTwo>
            <Box>
                <Image src={banner4} alt="Banner 4"/>
            </Box>

            <Box>
                <Image src={banner5} alt="Banner 5"/>
            </Box>
        </BannerTwo>
    )
}
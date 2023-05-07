import { News, NewContent, Box, NewImage, Image, 
NewDate, H6, NewIcon, Icon, Number, H5 } from "./styled";
import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import { BiMessageRounded } from "react-icons/bi"

export default function news() {
    return(
        <News id="news">
            <header className="header">
                <h2>Latest news</h2>
            </header>

            <NewContent>
                <Box>
                    <NewImage>
                        <Image src={blog1} alt="Blog 1"/>
                    </NewImage>
                
                    <NewDate>
                        <H6>May 06, 2023</H6>

                        <NewIcon>
                            <Icon>
                                <BiMessageRounded/>
                            </Icon>
                            <Number>40</Number>
                        </NewIcon>
                    </NewDate>

                    <H5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.</H5>
                </Box>

                <Box>
                    <NewImage>
                        <Image src={blog2} alt="Blog 2"/>
                    </NewImage>
                
                    <NewDate>
                        <H6>May 06, 2023</H6>

                        <NewIcon>
                            <Icon>
                                <BiMessageRounded/>
                            </Icon>
                            <Number>40</Number>
                        </NewIcon>
                    </NewDate>

                    <H5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.</H5>
                </Box>

                <Box>
                    <NewImage>
                        <Image src={blog3} alt="Blog 3"/>
                    </NewImage>
                
                    <NewDate>
                        <H6>May 06, 2023</H6>

                        <NewIcon>
                            <Icon>
                                <BiMessageRounded/>
                            </Icon>
                            <Number>40</Number>
                        </NewIcon>
                    </NewDate>

                    <H5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.</H5>
                </Box>

                <Box>
                    <NewImage>
                        <Image src={blog1} alt="Blog 1"/>
                    </NewImage>
                
                    <NewDate>
                        <H6>May 06, 2023</H6>
                        
                        <NewIcon>
                            <Icon>
                                <BiMessageRounded/>
                            </Icon>
                            <Number>40</Number>
                        </NewIcon>
                    </NewDate>

                    <H5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.</H5>
                </Box>
            </NewContent>
        </News>
    )   
}
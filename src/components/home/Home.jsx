import { Home, HomeText, H1, H3, Button } from "./styled";

export default function home() {
    return(
        <Home id="home">
            <HomeText>
                <H1>Find your own <br /> Happiness</H1>
                <H3>Make a bouquet and pick up a gift with <br /> your wishes. Deliver to any corner of the city.</H3>
                <Button href="#">Pick a bouquet</Button>
            </HomeText>
        </Home>
    )
}
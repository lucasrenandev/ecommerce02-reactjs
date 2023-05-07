import { useState } from "react";
import { ScrollArrow, Arrow } from "./styled";
import { MdKeyboardDoubleArrowUp } from "react-icons/md"
import { useEffect } from "react";

export default function scrollArrow() {
    const [arrow, setArrow] = useState(false)

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 450) {
                setArrow(true)
            }
            else {
                setArrow(false)
            }
        })
    }, [])

    return(
        <>
            {arrow && (
                <ScrollArrow onClick={scrollUp}>
                    <Arrow>
                        <MdKeyboardDoubleArrowUp/>
                    </Arrow>
                </ScrollArrow>
            )}
        </>
    )
}
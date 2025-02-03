"use client"

import {usePathname} from "next/navigation";

const SideLineAndText = () => {
    const pathname = usePathname()

    let text;
    switch (pathname) {
        case "/portfolio":
            text = "Portfolio";
            break;
        case "/contact-us":
            text = "Contact";
            break;
        case "/about-us":
            text = "About Us";
            break;
        default:
            text = "Home"
    }

    return (
        <div className="absolute md:left-12 xl:left-20 hidden md:flex flex-col items-center">
            <div className="w-[0.0625rem] h-[6.5rem] bg-light-grey mb-12"/>
            {text.split("").map((letter, index) => <span key={index} className="rotate-90 text-lg font-bold text-light-grey uppercase">{letter}</span>)}
        </div>
    )
}

export default SideLineAndText;
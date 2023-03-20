import { Dispatch, SetStateAction } from "react";

import { ColorComponent } from "./ColorComponent";
import { Heading } from "../Heading";
import { Theme } from "./Theme";

type HeaderProps = {
    pageTitle: string, 
    setTheme: Dispatch<SetStateAction<"light" | "dark">>
}

export const Header = ({pageTitle, setTheme} : HeaderProps) => {
    return (
        <header className="max-h-[10vh]">
            <Heading size="lg" align="center" asChild={true} className="pt-[4vh]">
                <h1>{pageTitle}</h1>
            </Heading>
            <ColorComponent />
            <Theme setTheme={setTheme} />
        </header>
    )
}
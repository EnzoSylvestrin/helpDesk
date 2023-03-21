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
        <header className="h-auto flex items-center justify-center flex-wrap sm:inline sm:h-[10vh]">
            <Heading size="lg" align="center" asChild={true} className="w-full pt-[4vh] sm:w-auto">
                <h1>{pageTitle}</h1>
            </Heading>
            <ColorComponent />
            <Theme setTheme={setTheme} />
        </header>
    )
}
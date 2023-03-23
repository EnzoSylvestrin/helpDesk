import { Dispatch, SetStateAction } from "react";

import { ColorComponent } from "./ColorComponent";
import { Heading } from "../Heading";
import { Theme } from "./Theme";
import { Back } from "./Back";

type HeaderProps = {
    pageTitle: string, 
    setTheme: Dispatch<SetStateAction<"light" | "dark">>,
    back?: boolean;
}

export const Header = ({ pageTitle, setTheme, back = false } : HeaderProps) => {
    return (
        <header className="h-auto flex items-center justify-center flex-wrap sm:block sm:h-[10vh]">
            {back ? <Back url="/"/> : ''}
            <Heading size="lg" align="center" asChild={true} className="w-full pt-[4vh] sm:w-auto">
                <h1>{pageTitle}</h1>
            </Heading>
            <ColorComponent setTheme={setTheme} />
            <Theme setTheme={setTheme} />
        </header>
    )
}
import { Theme } from "./Theme";
import { Heading } from "./Heading";
import { ColorComponent } from "./ColorComponent";

export const Header = ({pageTitle} : {pageTitle: string}) => {
    return (
        <header className="h-[10vh]">
            <Heading align="center" className="text-2xl pt-[5vh]">
                <h1>{pageTitle}</h1>
            </Heading>
            <ColorComponent />
            <Theme />
        </header>
    )
}
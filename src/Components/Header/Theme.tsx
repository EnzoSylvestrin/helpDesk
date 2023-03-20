import { useEffect, useState, Dispatch, SetStateAction} from "react";

import { BsMoonStarsFill } from 'react-icons/bs';
import { CgSun } from 'react-icons/cg';
import { Icon } from "../Icon";

export const Theme = ({setTheme} : {setTheme: Dispatch<SetStateAction<"light" | "dark">>}) => {

    const [darkMode, setDarkMode] = useState<boolean>(true);

    const HandleToggleTheme = () => {
        setDarkMode(!darkMode);
        setTheme(darkMode ? 'light' : 'dark');
        localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    }

    useEffect(() => {
        const CurrentTheme = localStorage.getItem('theme');
        setTheme(CurrentTheme == null ? 'dark' : CurrentTheme === 'dark' ? 'dark' : 'light');
        setDarkMode(CurrentTheme == null ? true : CurrentTheme === 'dark' ? true : false);
    }, []);

    return (
        <div 
            className="p-2 rounded-full absolute right-[60px] pointer top-[calc(4vh_+_5px)] hover:bg-lightHover dark:hover:bg-darkHover"
            onClick={HandleToggleTheme}
        >
            <Icon icon={darkMode ? CgSun : BsMoonStarsFill} size={26} />
        </div>
    )
}
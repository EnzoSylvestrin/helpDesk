import { useEffect, useState, Dispatch, SetStateAction } from "react";

import { BsMoonStarsFill } from 'react-icons/bs';
import { CgSun } from 'react-icons/cg';
import { Icon } from "../Icon";
import Tooltip from "../Tooltip";

export const Theme = ({ setTheme }: { setTheme: Dispatch<SetStateAction<"light" | "dark">> }) => {

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
        <Tooltip
            element={
                <div
                    className="p-2 rounded-full static mx-5 cursor-pointer my-[2px] block right-[30px] pointer top-[calc(4vh_+_5px)] hover:bg-lightHover dark:hover:bg-darkHover sm:m-0 sm:absolute sm:right-[60px]"
                    onClick={HandleToggleTheme}
                >
                    <Icon icon={darkMode ? CgSun : BsMoonStarsFill} size={26} />
                </div>
            }
            text="Altere o tema!"
            place="bottom"
        />
    )
}
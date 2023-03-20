import { useEffect, useState, Dispatch, SetStateAction} from "react";

import { BsMoonStarsFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';

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
            className="p-2 rounded-full absolute right-[60px] pointer top-[calc(5vh_+_5px)] hover:bg-lightHover dark:hover:bg-darkHover"
            onClick={HandleToggleTheme}
        >
            {
                darkMode
                ?
                <FiSun size={28} className='text-neutral-900 dark:text-gray-50' />
                :
                <BsMoonStarsFill size={26} className='text-neutral-900 dark:text-gray-50' />
            }
        </div>
    )
}
import { useEffect, useState } from "react";

import { FiSun } from 'react-icons/fi';
import { BsMoonStarsFill } from 'react-icons/bs';

export const Theme = () => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const HandleToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme);
    }

    useEffect(() => {
        const CurrentTheme = localStorage.getItem('theme');
        setTheme(CurrentTheme == null ? 'dark' : CurrentTheme === 'dark' ? 'dark' : 'light');
    }, []);

    return (
        <div 
            className="p-1 rounded-full hover:bg-gray-300 dark:hover:bg-slate-700"
            onClick={HandleToggleTheme}
        >
            {
                theme === 'dark'
                ?
                <FiSun size={28} color="#f5f5f5" />
                :
                <BsMoonStarsFill size={28} color="#282828" />
            }
        </div>
    )
}
import { useEffect, useRef, Dispatch, SetStateAction } from "react";
import Tooltip from "../Tooltip";

export const ColorComponent = ({setTheme} : {setTheme: Dispatch<SetStateAction<"light" | "dark">>}) => {

    const InputColor = useRef<HTMLInputElement>(null);

    const HandleToggleColor = () => {
        if (InputColor.current == null || InputColor.current.value == null) return; 
        const Color = InputColor.current.value.toString();
        document.body.style.setProperty('--main', Color);
        localStorage.setItem("color", Color);

        const hex = Color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
      
        const mainElement = document.querySelector('main');
        if (!mainElement) return;

        const rgbMain = window.getComputedStyle(mainElement).getPropertyValue('background-color').replace('#', '').replaceAll(' ', '');
    
        const splitRgb = rgbMain.substring(rgbMain.indexOf('(') + 1, rgbMain.indexOf(')')).split(',');

        const rb = parseInt(splitRgb[0]);
        const gb = parseInt(splitRgb[1]);
        const bb = parseInt(splitRgb[2]);

        const diffR = Math.abs(r - rb);
        const diffG = Math.abs(g - gb);
        const diffB = Math.abs(b - bb);

        if (diffR <= 25 && diffG <= 25 && diffB <= 25) {
            setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
        } 
    }

    useEffect(() => {
        if (InputColor.current == null) return; 
        const color = localStorage.getItem("color");
        InputColor.current.value = color || '#5f54ee';
        document.body.style.setProperty('--main', color);
    }, [])

    return (
        <>
            <Tooltip 
                element={
                    <input 
                        type="color" 
                        className="w-6 h-6 top-[calc(4vh_+_15px)] cursor-pointer left-[30px] border-0 rounded-full pointer mx-[10px] static sm:m-0 sm:absolute md:left-[60px]"
                        onInput={HandleToggleColor}
                        ref={InputColor}
                    />
                }
                place="top"
                text="Altere a cor principal do site!"
            />
            
        </>
    );
}
import { useEffect, useRef } from "react";

export const ColorComponent = () => {

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
      
        const hexb = window.getComputedStyle(document.body).getPropertyValue('--bgColor').replace('#', '').replaceAll(' ', '');
    
        const rb = parseInt(hexb.substring(0, 2), 16);
        const gb = parseInt(hexb.substring(2, 4), 16);
        const bb = parseInt(hexb.substring(4, 6), 16);

        const diffR = Math.abs(r - rb);
        const diffG = Math.abs(g - gb);
        const diffB = Math.abs(b - bb);
        
        if (diffR <= 25 && diffG <= 25 && diffB <= 25) {
            //TODO change mode
        } 
    }

    useEffect(() => {
        if (InputColor.current == null) return; 
        const color = localStorage.getItem("color");
        InputColor.current.value = color || '#5f54ee';
        document.body.style.setProperty('--main', color);
    }, [])

    return (
        <input 
            type="color" 
            className="w-6 h-6 absolute top-[calc(4vh_+_15px)] left-[60px] border-0 rounded-full pointer"
            onInput={HandleToggleColor}
            ref={InputColor}
        />
    );
}
import React from 'react';
import * as RadioGroupRadix from '@radix-ui/react-radio-group';
import clsx from 'clsx';

type RadioGroupProps = {
    className: string,
    Radios: {
        value: string,
        color: string
    }[]
}

export const RadioGroup = ({ className, Radios } : RadioGroupProps) => {
    return (
        <RadioGroupRadix.Root
            className={clsx("flex flex-col gap-2.5 ml-1", className)}
            aria-label="Status do chamado"
        >
            <div className="flex flex-col gap-3">
                {
                    Radios.map((element, i) => {
                        return (
                            <div key={i} className="flex gap-2 items-center">
                                <RadioGroupRadix.Item
                                    className={clsx("!bg-transparent w-[18px] h-[18px] rounded-full outline-none cursor-pointer border", element.color)}
                                    value={element.value}
                                    id={`r${i}`}
                                >
                                    <RadioGroupRadix.Indicator className={clsx("flex items-center justify-center !bg-transparent w-full h-full relative after:content-[''] after:block after:w-[10px] after:h-[10px] after:rounded-full", element.color)} />
                                </RadioGroupRadix.Item>
                                <label className={clsx("text-md !bg-transparent cursor-pointer", element.color)} htmlFor={`r${i}`}>
                                    {element.value}
                                </label>
                            </div>
                        )
                    })
                }
                
            </div>
        </RadioGroupRadix.Root>
    );
};
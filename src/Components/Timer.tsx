import { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

import { BsClockFill } from "react-icons/bs";

import { FormInputs } from "@/pages";

import { Button } from "./Button";
import { Icon } from "./Icon";
import { Text } from "./Text";

type TimerProps = { 
    register: UseFormRegister<FormInputs>,
    setValue: UseFormSetValue<FormInputs>,
}

export const Timer = ({ register, setValue }: TimerProps) => {

    const [time, setTime] = useState<string>('00:00:00');
    const [reset, setReset] = useState<boolean>(false);

    const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);


    const startTimer = () => {
        if (!intervalId) {
            const id = setInterval(() => {
                setTime(prev => IncrementTimerValue(prev));
            }, 1000);
            setIntervalId(id);
            setReset(false);
        }
    };

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
            setReset(true);
        }
        else if (reset) {
            setTime('00:00:00');
            setReset(false);
        }
    };

    const IncrementTimerValue = (previous: string): string => {
        let valueSplited = previous.split(':');
        let seg = parseInt(valueSplited[2]);
        let min = parseInt(valueSplited[1]);
        let hour = parseInt(valueSplited[0]);
        if (seg === 59) {
            seg = -1;
            min += 1;
            if (min === 60) {
                min = 0;
                hour += 1;
            }
        }
        seg += 1;
        let FormatedTime = `${FormatTime(hour)}:${FormatTime(min)}:${FormatTime(seg)}`;
        setValue('duracao', FormatedTime);
        return FormatedTime;
    }

    const FormatTime = (text: string | number): string => {
        return text.toString().padStart(2, '0');
    };

    return (
        <div className="pt-4 flex flex-col items-center h-full">
            <div className="flex items-center gap-1 mb-2">
                <input type="hidden" id="duracao" {...register('duracao')} />
                <Icon icon={BsClockFill} size={18} colored />
                <Text size="lg" className="w-[85px]">
                    {time}
                </Text>
            </div>
            <div className="flex items-center justify-center gap-1">
                <Button text="Iniciar" size="sm" onClick={startTimer} />
                <Button text={!reset ? "Parar" : "Limpar"} size="sm" onClick={stopTimer} />
            </div>
        </div>
    );
};
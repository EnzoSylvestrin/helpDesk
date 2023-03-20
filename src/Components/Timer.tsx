import { BsClockFill } from "react-icons/bs"
import { Button } from "./Button"
import { Icon } from "./Icon"
import { Text } from "./Text"

export const Timer = () => {
    return (
        <div className="mt-4 flex-1 flex flex-col items-center h-full mb-1">
            <div className="flex items-center gap-1 mb-2">
                <Icon icon={BsClockFill} size={18} colored />
                <Text size="lg" className="w-[85px]">
                    00:00:00
                </Text>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
                <Button text="Iniciar" size="sm" />
                <Button text="Parar" size="sm" />
            </div>
        </div>
    )
}
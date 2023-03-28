import { ChangeEvent } from "react";

import { IconType } from "react-icons";

import { Input } from "./Input";
import { Text } from "./Text";

type FilterProps = {
    id: string,
    label: string,
    items?: string[]
    icon?: IconType,
    placeHolder: string,
    type: 'select' | 'date',
    disabled?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement> | string) => void,
}

export const Filter = ({ id, label, items, placeHolder, icon, type, disabled = false, onChange } : FilterProps) => {
    return (
        <label htmlFor={id} className='w-full mt-5 md:w-[30%]'>
            <Text className={'mb-2 !text-[19px]'}>{label}</Text>
            <Input.Root>
                {
                    icon != null 
                    ?
                    <Input.Icon icon={icon} size={18} colored />
                    :
                    ''
                }
                {
                    type === 'select' && items
                    ?
                    <Input.Select id={id} placeholder={placeHolder} items={items} onChange={onChange} />
                    :
                    <Input.Input type={'date'} id={id} onChange={onChange} disabled={disabled}/>
                }
            </Input.Root>
        </label>
    );
}
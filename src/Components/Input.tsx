import { InputHTMLAttributes, ReactNode } from 'react';

import { Icon, IconProps } from './Icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputRootProps {
    children: ReactNode;
}

function InputRoot(props : InputRootProps) {
    return (
        <div className='flex items-center cursor-text gap-[10px] px-3 h-12 rounded max-w-full bg-InputColorLight text-gray-50 text-xs placeholder:text-gray-100 dark:bg-InputColorDark focus-within:ring-2 ring-[var(--main)] shadow-[rgba(0,_0,_0,_0.19)_0px_10px_20px,_rgba(0,_0,_0,_0.23)_0px_6px_6px]'>
            {props.children}
        </div>
    );
}

InputRoot.displayName = 'Input.Root';

function InputIcon({ ...props }: IconProps) {
    return (
        <Icon {...props} />
    )
}

InputIcon.displayName = 'Input.Icon'

export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput(props : InputInputProps) {
    return (
        <input 
            className='bg-transparent flex-1 text-slate-800 text-sm outline-none placeholder:text-slate-700 dark:text-gray-50 dark:placeholder:text-gray-100'
            {...props}
        />
    )
}

InputInput.displayName = 'Input.Input'


export const Input = {
    Root: InputRoot,
    Icon: InputIcon,
    Input: InputInput
}
import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { Icon, IconProps } from './Icon';
import { SelectComponent, SelectProps } from './Select';
import { UseFormRegister } from 'react-hook-form';
import { FormInputs } from '@/pages';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export type InputRootProps = {
    className?: string,
    children: ReactNode;
}

const InputRoot = ({className, children} : InputRootProps) => {
    return (
        <div className={clsx(
            'flex items-center cursor-text gap-[10px] px-3 h-12 rounded max-w-full bg-InputColorLight',
            'text-gray-50 text-xs placeholder:text-gray-100 dark:bg-InputColorDark focus-within:ring-2',
            'ring-[var(--main)] shadow-[rgba(0,_0,_0,_0.19)_0px_10px_20px,_rgba(0,_0,_0,_0.23)_0px_6px_6px]',
            'transition-colors duration-300',
            className
        )}>
            {children}
        </div>
    );
}

InputRoot.displayName = 'Input.Root';

const InputIcon = ({ ...props }: IconProps) => {
    return (
        <Icon {...props} />
    )
}

InputIcon.displayName = 'Input.Icon'

type InputInputProps = InputHTMLAttributes<HTMLInputElement>;

const InputInput = ({ ...props } : InputInputProps) => {
    return (
        <input 
            className='bg-transparent flex-1 text-slate-800 text-sm outline-none placeholder:text-slate-700 dark:text-gray-50 dark:placeholder:text-gray-100'
            {...props}
        />
    )
}

InputInput.displayName = 'Input.Input'

const InputSelect = ({ ...props } : SelectProps) => {
    return (
        <SelectComponent {...props}/>
    )
}


type TextAreaProps = HTMLAttributes<HTMLTextAreaElement> & {
    register?: UseFormRegister<FormInputs>, 
    required?: boolean  
};

const InputTextArea = ({ className, register, required, ...props } : TextAreaProps) => {
    return (
        <textarea
            className={clsx(
                'resize-none bg-transparent flex-1 text-slate-800 text-sm outline-none pt-[10px]',
                'placeholder:text-slate-700 dark:text-gray-50 dark:placeholder:text-gray-500',
                className
            )}
            {...register != null ? {...register('descricao', {required})} : ''}
            {...props}
        />
    )
}

export const Input = {
    Root: InputRoot,
    Icon: InputIcon,
    Input: InputInput,
    Select: InputSelect,
    TextArea: InputTextArea
}
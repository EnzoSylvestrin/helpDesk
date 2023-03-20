import React, { ReactNode } from 'react';
import * as Select from '@radix-ui/react-select';

import { BiCheck, BiChevronDown, BiChevronUp } from 'react-icons/bi';
import clsx from 'clsx';
import { Icon } from './Icon';
import { FormatText } from '@/Utils/Commom';

export type SelectProps = {
    placeholder: string,
    items: string[],
    id: string,
}

export const SelectComponent = ({ placeholder, items, id } : SelectProps) => (
    <Select.Root>
        <Select.Trigger
            className="flex items-center justify-between text-sm h-full w-full bg-transparent text-darkColor dark:text-lightColor outline-none"
            aria-label={placeholder}
            id={id}
        >
            <Select.Value placeholder={placeholder} />
            <Select.Icon>
                <Icon icon={BiChevronDown} size={24} colored/>
            </Select.Icon>
        </Select.Trigger>
        <Select.Portal className='bg-white dark:bg-slate-700 transition-all duration-500'>
            <Select.Content className="rounded-lg max-h-96 w-96 scroll-auto">
                <Select.ScrollUpButton className="flex border-t rounded-t-lg border-b-slate-300 items-center justify-center h-5 py-4 cursor-pointer">
                    <Icon icon={BiChevronUp} size={24} colored/>
                </Select.ScrollUpButton>
                <Select.Viewport>
                    <Select.Group>
                        {
                            items.map((element, i) => {
                                return <SelectItem value={element} className={i === 0 ? 'rounded-t-lg' : i === items.length - 1 ? 'rounded-b-lg' : ''} key={i}>{FormatText(element)}</SelectItem>
                            })
                        }
                    </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className="flex border-t rounded-b-lg border-t-slate-300 items-center justify-center h-5 py-4 bg-white cursor-pointer">
                    <Icon icon={BiChevronDown} size={24} colored/>
                </Select.ScrollDownButton>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
);

type SelectItemProps = {
    children: ReactNode, 
    value: string
    className?: string, 
}

const SelectItem = ({ children, value, className } : SelectItemProps) => {
    return (
        <Select.Item
            className={clsx(
                'text-sm text-darkColor bg-lightMain flex cursor-pointer items-center', 
                'h-5 pl-6 px-5 py-4 relative select-none data-[disabled]:text-gray-400', 
                'data-[disabled]:pointer-events-none data-[highlighted]:outline-none',
                'data-[highlighted]:bg-lightHover data-[highlighted]:text-[var(--main)]',
                'dark:text-lightColor dark:bg-darkMain',
                className
            )}
            value={value}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                <Icon icon={BiCheck} size={20} colored/>
            </Select.ItemIndicator>
        </Select.Item>
    );
};
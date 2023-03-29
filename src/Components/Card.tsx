import { MouseEvent } from "react";

import { chamados } from "@prisma/client";

import { IconType } from "react-icons";

import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaUserAlt, FaHeadset } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

import { Heading } from "./Heading";
import { Icon } from "./Icon";
import { Text } from "./Text";
import clsx from "clsx";

type CardProps = {
    Chamado: chamados
}

export const Card = ({ Chamado }: CardProps) => {

    const listIcons: IconType[] = [
        FaUserAlt,
        FaHeadset,
        BsFillCalendarDateFill,
        AiFillClockCircle
    ]

    const FormatData = (data: Date) => {
        let date = data.toString().substring(0, 10);
        let splitedDate = date.split('-');
        return `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;
    }

    const listDados: string[] = [
        Chamado.cliente,
        Chamado.tipo,
        Chamado.duracao, //FormatData(Chamado.createdAt),
        Chamado.duracao
    ]

    const HandleCardClick = (e: MouseEvent<HTMLDivElement>) => {
        const CardDescription = e.currentTarget.children[2];
        if (CardDescription.className.indexOf('!flex') > -1) {
            CardDescription.className = CardDescription.className.replace('!flex', '');
        }
        else {
            CardDescription.className += ' !flex';
        }
    }

    return (
        <div
            className='w-full h-full px-5 py-[10px] pl-[30px] rounded-[10px] flex flex-col my-3 relative cursor-pointer shadow-[rgba(0,_0,_0,_0.1)_0px_10px_15px_-3px,_rgba(0,_0,_0,_0.05)_0px_4px_6px_-2px] bg-InputColorLight dark:bg-InputColorDark'
            onClick={(e) => HandleCardClick(e)}
        >
            <div className={clsx(
                'absolute left-0 top-0 h-full w-5 rounded-tl-[10px] rounded-bl-[10px]',
                {
                    "bg-green-600": Chamado.status === 0,
                    "bg-orange-500": Chamado.status === 1
                }
            )} />
            <div className='relative'>
                <Heading size='lg' className='mb-2 leading-[1.2]'>{Chamado.funcionario}</Heading>
                {
                    listIcons.map((element, i) => {
                        return <div className='flex items-center justify-start gap-1 my-3' key={i}>
                            <Icon icon={element} size={20} className="w-[26px]" colored />
                            <Text className='!text-[22px]'>{listDados[i]}</Text>
                        </div>
                    })
                }
                <Icon icon={HiChevronRight} size={32} className="absolute top-[50%] right-[20px] -translate-y-[50%] transition-transform duration-[400ms]" />
                <Text size='lg' className='absolute top-[11.5px] right-[30px] !text-[var(--main)]'>#{Chamado.idchamados}</Text>
            </div>
            <div className='flex-col w-full my-2 flex-1' style={{ display: 'none' }}>
                <Heading size='sm' className="mb-[5px]">Descrição:</Heading>
                <div className='w-full flex items-center cursor-text'>
                    <Text className={'!text-[19px]'}>{Chamado.descricao}</Text>
                </div>
            </div>
        </div>
    );
}
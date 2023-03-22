import { MouseEvent, useState } from 'react'; 

import { IconType } from 'react-icons/lib';
import { FaGhost, FaHeadset, FaUserAlt } from 'react-icons/fa';
import { TfiMenuAlt } from 'react-icons/tfi';
import { HiChevronRight } from 'react-icons/hi';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { AiFillClockCircle } from 'react-icons/ai';

import { OptionsFunc } from '@/Utils/Options';

import { HeadComponent } from "@/Components/HeadComponent";
import { Header } from '@/Components/Header/Header';
import { Text } from '@/Components/Text';
import { Input } from '@/Components/Input';
import { Heading } from '@/Components/Heading';
import { Button } from '@/Components/Button';
import { Icon } from '@/Components/Icon';

const Consulta = () => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const listIcons: IconType[] = [
        FaUserAlt,
        FaHeadset,
        BsFillCalendarDateFill,
        AiFillClockCircle
    ]

    const listDados: string[] = [
        "Restaurante teste",
        "SAT",
        "12/02/2023",
        "00:00:00"
    ]

    const HandleCardClick = (e: MouseEvent<HTMLDivElement>) => {
        const CardDescription = e.currentTarget.children[2];
        console.log(CardDescription.className);
        if (CardDescription.className.indexOf('!flex') > -1) {
            CardDescription.className = CardDescription.className.replace('!flex', '');
        }
        else {
            CardDescription.className += ' !flex';
        }
    }

    return (
        <>
            <HeadComponent title="Consulta de chamados" />
            <section className={`${theme === 'dark' ? 'dark' : ''}`}>
                <main className='min-h-[100vh] transition-colors duration-300 bg-grayMain dark:bg-darkMain'>
                    <Header pageTitle='Consulta de chamados' setTheme={setTheme} back={true} />
                    <div className='px-10 py-5 flex flex-wrap items-center justify-around'>
                        <label htmlFor='func' className='w-[30%] mt-5'>
                            <Text className={'mb-2 !text-[19px]'}>Funcionário:</Text>
                            <Input.Root>
                                <Input.Icon icon={FaUserAlt} size={18} colored/>
                                <Input.Select id='func' placeholder='Todos' items={OptionsFunc} />
                            </Input.Root>
                        </label>
                        <label htmlFor='type' className='w-[30%] mt-5'>
                            <Text className={'mb-2 !text-[19px]'}>Tipo:</Text>
                            <Input.Root>
                                <Input.Icon icon={FaHeadset} size={18} colored/>
                                <Input.Select id='type' placeholder='Todos' items={OptionsFunc} />
                            </Input.Root>
                        </label>
                        <label htmlFor='status' className='w-[30%] mt-5'>
                            <Text className={'mb-2 !text-[19px]'}>Status:</Text>
                            <Input.Root>
                                <Input.Icon icon={TfiMenuAlt} size={18} colored/>
                                <Input.Select id='status' placeholder='Todos' items={OptionsFunc} />
                            </Input.Root>
                        </label>
                        <label htmlFor='fantasy' className='w-[30%] mt-5'>
                            <Text className={'mb-2 !text-[19px]'}>Fantasia:</Text>
                            <Input.Root>
                                <Input.Icon icon={FaGhost} size={18} colored/>
                                <Input.Select id='fantasy' placeholder='Todos' items={OptionsFunc} />
                            </Input.Root>
                        </label>
                        <label htmlFor='initial' className='w-[30%] mt-5'>
                            <Text className={'mb-2 !text-[19px]'}>Data inicial:</Text>
                            <Input.Root>
                                <Input.Input id='initial' type={'date'} />
                            </Input.Root>
                        </label>
                        <label htmlFor='final' className='w-[30%] mt-5'>
                            <Text className={'mb-2 !text-[19px]'}>Data Final:</Text>
                            <Input.Root>
                                <Input.Input id='func' type={'date'} />
                            </Input.Root>
                        </label>
                    </div>
                    <div className="flex flex-col text-sm">
                        <Heading align='center'>Total de registros: <span className={'text-[var(--main)]'}>21</span></Heading>
                        <div className="mt-5 flex items-center justify-center gap-[10px]">
                            <Button text='Expandir' size="sm" />
                            <Button text='Colapsar' size="sm" />
                        </div>
                    </div>
                    <div className='w-full h-auto flex items-center flex-col py-5 px-[60px] justify-center'>
                        <div 
                            className='w-full h-full px-5 py-[10px] pl-[30px] rounded-[10px] flex flex-col my-3 relative cursor-pointer shadow-[rgba(0,_0,_0,_0.1)_0px_10px_15px_-3px,_rgba(0,_0,_0,_0.05)_0px_4px_6px_-2px] bg-InputColorLight dark:bg-InputColorDark'
                            onClick={(e) => HandleCardClick(e)}
                        >
                            <div className='absolute left-0 top-0 h-full w-5 rounded-tl-[10px] rounded-bl-[10px] bg-green-600' />
                            <div className='relative'>
                                <Heading size='lg' className='mb-2 leading-[1.2]'>Laís</Heading>
                                {
                                    listIcons.map((element, i) => {
                                        return <div className='flex items-center justify-start gap-1 my-3' key={i}>
                                            <Icon icon={element} size={20} className="w-[26px]" colored/>
                                            <Text className='!text-[22px]'>{listDados[i]}</Text>
                                        </div>
                                    })
                                }
                                <Icon icon={HiChevronRight} size={32} className="absolute top-[50%] right-[20px] -translate-y-[50%] transition-transform duration-[400ms]" />
                                <Text size='lg' className='absolute top-[11.5px] right-[30px] !text-[var(--main)]'>#1</Text>
                            </div>
                            <div className='flex-col w-full my-2 flex-1' style={{display: 'none'}}>
                                <Heading size='sm' className="mb-[5px]">Descrição:</Heading>
                                <div className='w-full flex items-center cursor-text'>
                                    <Text className={'!text-[19px]'}>Mensagem de teste eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Consulta;
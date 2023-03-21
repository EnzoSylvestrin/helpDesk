import { useState } from 'react'; 

import { FaGhost, FaHeadset, FaUserAlt } from 'react-icons/fa';
import { TfiMenuAlt } from 'react-icons/tfi';

import { OptionsFunc } from '@/Utils/Options';

import { HeadComponent } from "@/Components/HeadComponent";
import { Header } from '@/Components/Header/Header';
import { Text } from '@/Components/Text';
import { Input } from '@/Components/Input';

const Consulta = () => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

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
                </main>
            </section>
        </>
    );
}

export default Consulta;
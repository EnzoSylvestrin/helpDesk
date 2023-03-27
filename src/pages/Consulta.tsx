import { useEffect, useState } from 'react';

import { FaHeadset, FaUserAlt } from 'react-icons/fa';
import { TfiMenuAlt } from 'react-icons/tfi';

import { OptionsFunc } from '@/Utils/Options';
import Api from '@/Utils/Api';

import { chamados } from '@prisma/client';

import { HeadComponent } from "@/Components/HeadComponent";
import { Header } from '@/Components/Header/Header';
import { Text } from '@/Components/Text';
import { Input } from '@/Components/Input';
import { Heading } from '@/Components/Heading';
import { Button } from '@/Components/Button';
import { Card } from '@/Components/Card';

const Consulta = () => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [chamados, setChamados] = useState<JSX.Element[]>([]);

    useEffect(() => {
        //GetChamados();
    })

    const GetChamados = async () => {
        const chamadosResult = await Api.get<chamados[]>('/Chamados');
        
        let listChamados : JSX.Element[] = []; 
        for (let chamado of chamadosResult.data) {
            listChamados.push(<Card Chamado={chamado} />)
        }
        setChamados(listChamados);
    }

    return (
        <>
            <HeadComponent title="Consulta de chamados" />
            <section className={`${theme === 'dark' ? 'dark' : ''}`}>
                <main className='min-h-[100vh] transition-colors duration-300 bg-grayMain dark:bg-darkMain'>
                    <Header pageTitle='Consulta de chamados' setTheme={setTheme} back={true} />
                    <div className='p-5 flex flex-wrap flex-col items-center justify-center xs:px-10 xs:py-5 md:flex-row md:justify-around'>
                        <label htmlFor='func' className='w-full mt-5 md:w-[30%]'>
                            <Text className={'mb-2 !text-[19px]'}>Funcionário:</Text>
                            <Input.Root>
                                <Input.Icon icon={FaUserAlt} size={18} colored />
                                <Input.Select id='func' placeholder='Todos' items={OptionsFunc} />
                            </Input.Root>
                        </label>
                        <label htmlFor='type' className='w-full mt-5 md:w-[30%]'>
                            <Text className={'mb-2 !text-[19px]'}>Tipo:</Text>
                            <Input.Root>
                                <Input.Icon icon={FaHeadset} size={18} colored />
                                <Input.Select id='type' placeholder='Todos' items={OptionsFunc} />
                            </Input.Root>
                        </label>
                        <label htmlFor='status' className='w-full mt-5 md:w-[30%]'>
                            <Text className={'mb-2 !text-[19px]'}>Status:</Text>
                            <Input.Root>
                                <Input.Icon icon={TfiMenuAlt} size={18} colored />
                                <Input.Select id='status' placeholder='Todos' items={OptionsFunc} />
                            </Input.Root>
                        </label>
                        <label htmlFor='cliente' className='w-full mt-5 md:w-[30%]'>
                            <Text className={'mb-2 !text-[19px]'}>Fantasia:</Text>
                            <Input.Root>
                                <Input.Icon icon={FaUserAlt} size={18} colored />
                                <Input.Select id='cliente' placeholder='Todos' items={OptionsFunc} />
                            </Input.Root>
                        </label>
                        <label htmlFor='initial' className='w-full mt-5 md:w-[30%]'>
                            <Text className={'mb-2 !text-[19px]'}>Data inicial:</Text>
                            <Input.Root>
                                <Input.Input id='initial' type={'date'} />
                            </Input.Root>
                        </label>
                        <label htmlFor='final' className='w-full mt-5 md:w-[30%]'>
                            <Text className={'mb-2 !text-[19px]'}>Data Final:</Text>
                            <Input.Root>
                                <Input.Input id='func' type={'date'} />
                            </Input.Root>
                        </label>
                    </div>
                    <div className="flex flex-col text-sm">
                        <Heading align='center'>Total de registros: <span className={'text-[var(--main)]'}>{chamados.length}</span></Heading>
                        <div className="mt-5 flex items-center justify-center gap-[10px]">
                            <Button text='Expandir' size="sm" />
                            <Button text='Colapsar' size="sm" />
                        </div>
                    </div>
                    <div className='w-full h-auto flex items-center flex-col py-5 px-[15px] justify-center md:px-[60px]'>
                        {chamados}
                    </div>
                </main>
            </section>
        </>
    );
}

export default Consulta;
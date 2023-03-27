import { ChangeEvent, useEffect, useState } from 'react';

import { FaHeadset, FaUserAlt } from 'react-icons/fa';
import { TfiMenuAlt } from 'react-icons/tfi';

import { OptionsFunc, OptionsType } from '@/Utils/Options';
import Api from '@/Utils/Api';

import { chamados } from '@prisma/client';

import { HeadComponent } from "@/Components/HeadComponent";
import { Header } from '@/Components/Header/Header';
import { Heading } from '@/Components/Heading';
import { Button } from '@/Components/Button';
import { Card } from '@/Components/Card';
import { Filter } from '@/Components/Filter';

type Filters = {
    funcionario?: string,
    tipo?: string,
    status?: 'Concluido' | 'Pendente',
    cliente?: string,
    dataInicial?: string,
    dataFinal?: string,
}

const Consulta = () => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [chamados, setChamados] = useState<JSX.Element[]>([]);

    const [filters, setFilters] = useState<Filters>()

    useEffect(() => {
        //GetChamados();
    });

    const GetChamados = async () => {
        const chamadosResult = await Api.get<chamados[]>('/Chamados');
        
        let listChamados : JSX.Element[] = []; 
        for (let chamado of chamadosResult.data) {
            listChamados.push(<Card Chamado={chamado} />)
        }
        setChamados(listChamados);
    }

    const OnChangeFilters = (e: string | ChangeEvent<HTMLInputElement>) => {
        if (typeof e == 'string') {
            //TODO select change
        }
        else {
            //TODO date change
        }
    }

    return (
        <>
            <HeadComponent title="Consulta de chamados" />
            <section className={`${theme === 'dark' ? 'dark' : ''}`}>
                <main className='min-h-[100vh] transition-colors duration-300 bg-grayMain dark:bg-darkMain'>
                    <Header pageTitle='Consulta de chamados' setTheme={setTheme} back={true} />
                    <div className='p-5 flex flex-wrap flex-col items-center justify-center xs:px-10 xs:py-5 md:flex-row md:justify-around'>
                        <Filter
                            id='Func'
                            label='Funcionário:'
                            items={OptionsFunc}
                            placeHolder="Todos"
                            type="select"
                            icon={FaUserAlt}
                            onChange={(e) => OnChangeFilters(e)}
                        />
                        <Filter
                            id='tipo'
                            label='Tipo:'
                            items={OptionsType}
                            type="select"
                            icon={FaHeadset}
                            placeHolder="Todos"
                            onChange={(e) => OnChangeFilters(e)}
                        />
                        <Filter
                            id='stats'
                            label='Status:'
                            items={["Pendente", "Concluído"]}
                            placeHolder="Todos"
                            type="select"
                            icon={TfiMenuAlt}
                            onChange={(e) => OnChangeFilters(e)}
                        />
                        <Filter
                            id='cliente'
                            label='Cliente:'
                            items={OptionsType}
                            type="select"
                            placeHolder="Todos"
                            icon={FaUserAlt}
                            onChange={(e) => OnChangeFilters(e)}
                        />
                        <Filter
                            id='initial'
                            label='Data inicial:'
                            type='date'
                            placeHolder=''
                            onChange={(e) => OnChangeFilters(e)}
                        />
                        <Filter
                            id='final'
                            label='Data Final:'
                            type='date'
                            placeHolder=''
                            disabled
                            onChange={(e) => OnChangeFilters(e)}
                        />
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
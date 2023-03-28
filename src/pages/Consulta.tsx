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
import { AxiosResponse } from 'axios';

export type Filters = {
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

    const [filters, setFilters] = useState<Filters>({})

    const optionsStats = ["Pendente", "Concluído"];

    useEffect(() => {
        //GetChamados();
    });

    const GetChamados = async () => {
        const chamadosResult = await Api.get<chamados[]>('/Chamados');
        SetChamados(chamadosResult);
    }

    const OnChangeFilters = (e: string | ChangeEvent<HTMLInputElement>) => {
        let newFilters = filters;
        if (typeof e === 'string') {
            if (OptionsFunc.includes(e)) {
                newFilters = ({
                    ...filters,
                    funcionario: e
                });
            }
            else if (OptionsType.includes(e)) {
                newFilters = ({
                    ...filters,
                    tipo: e
                });
            }      
            else if (optionsStats.includes(e)) {
                newFilters = ({
                    ...filters,
                    //@ts-ignore
                    status: e
                })
            }
            else {
                newFilters = ({
                    ...filters,
                    cliente: e
                })
            }
        }
        else {
            let target = e.currentTarget;
            if (target.id === "initial") {
                newFilters = ({
                    ...filters,
                    dataInicial: target.value
                })
            }
            else {
                newFilters = ({
                    ...filters,
                    dataFinal: target.value
                })
            }
        }
        GetChamadosByFilters(newFilters);
    }

    const GetChamadosByFilters = async (newFilters: Filters) => {
        console.log(newFilters);
        // const responseFilters = await Api.get<chamados[]>('/Filters', { params: newFilters });
        // SetChamados(responseFilters);
        // setFilters(newFilters);
    }

    const SetChamados = (chamadosResult: AxiosResponse<chamados[], any>) => {
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
                            items={optionsStats}
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
import { FormEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { clientes } from '@prisma/client';

import { FaUserAlt, FaHeadset } from 'react-icons/fa';

import { OptionsFunc, OptionsType } from '@/Utils/Options';

import Api from '@/Utils/Api';

import { Header } from '@/Components/Header/Header';
import { Timer } from '@/Components/Timer';
import { Input } from '@/Components/Input';
import { Text } from '@/Components/Text';
import { RadioGroup } from '@/Components/RadioGroup';
import { Button } from '@/Components/Button';
import { HeadComponent } from '@/Components/HeadComponent';
import { Description } from '@/Components/Description';

type FormInputs = {
  funcionario: string,
  cliente: string,
  tipo: string,
  status: boolean,
  descricao: string,
}

export default function Home() {

  const { register, handleSubmit } = useForm<FormInputs>();

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [optionsClientes, setOptionsClientes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetOptionsCLientes();
  }, [])

  const GetOptionsCLientes = async () => {
    const response = await Api.get<clientes[]>('/Clientes');

    let options: string[] = [];
    response.data.forEach((cliente) => {
      options.push(cliente.nome)
    })

    setOptionsClientes(options);
  }

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <>
      <HeadComponent title='Cadastro de chamados' />
      <section className={`${theme === 'dark' ? 'dark' : ''}`}>
        <main className='min-h-[100vh] transition-colors duration-300 bg-grayMain dark:bg-darkMain'>
          <Header pageTitle='Cadastro de chamados' setTheme={setTheme} />
          <form method='POST' action='/api/InsertChamado' className='min-h-[90vh] flex flex-col justify-start' onSubmit={handleSubmit(onSubmit)}>
            <Timer register={register} />
            <div className='h-full py-[10px] px-[5px] items-stretch flex flex-col flex-wrap pt-3 md:px-10 sm:flex-row'>
              <div className='w-full max-w-full px-2 py-[10px] xs:px-5 xs:py-[10px] sm:w-[45%] sm:max-w-[450px] p-5 h-[85%] gap-5 flex flex-col'>
                <label htmlFor='user'>
                  <Text className={'mb-2 !text-[19px]'}>Funcionário:</Text>
                  <Input.Root>
                    <Input.Icon icon={FaUserAlt} size={18} colored />
                    <Input.Select
                      placeholder='Selecione o funcionário...'
                      items={OptionsFunc}
                      id={'user'}
                      register={register}
                      registerName={'funcionario'}
                    />
                  </Input.Root>
                </label>
                <label htmlFor='client'>
                  <Text className={'mb-2 !text-[19px]'}>Cliente:</Text>
                  <Input.Root>
                    <Input.Icon icon={FaUserAlt} size={18} colored />
                    <Input.Select
                      placeholder='Selecione o cliente...'
                      items={optionsClientes}
                      id={'client'}
                      register={register}
                      registerName={'cliente'}
                    />
                  </Input.Root>
                </label>
                <label htmlFor='type'>
                  <Text className={'mb-2 !text-[19px]'}>Tipo:</Text>
                  <Input.Root>
                    <Input.Icon icon={FaHeadset} size={19} colored />
                    <Input.Select
                      placeholder='Selecione o tipo...'
                      items={OptionsType}
                      id={'type'}
                      register={register}
                      registerName={'tipo'}
                    />
                  </Input.Root>
                </label>
                <label className='mt-5'>
                  <Text className={'mb-2 !text-[19px]'}>Status:</Text>
                  <RadioGroup
                    className='mt-4'
                    Radios={[
                      { value: 'Pendente', color: 'text-yellow-500 after:bg-yellow-500 border-yellow-500' },
                      { value: 'Concluido', color: 'text-green-500 after:bg-green-500 border-green-500' }
                    ]}
                    register={register}
                    registerName={'status'}
                  />
                </label>
              </div>
              <div className='px-2 h-[350px] xs:px-5 xs:w-full xs:flex-none sm:flex-1 sm:py-[10px] sm:h-auto p-5 flex flex-col'>
                <Description register={register} />
              </div>
            </div>
            <footer className='w-full pt-10 px-[13px] grow-1 xs:px-[25px] md:px-[60px] flex flex-1 items-center mb-5 justify-between'>
              <Button size='lg' href='/Consulta' text='Consulta' />
              <Button size='lg' type='submit' text='Registrar' loading={loading} />
            </footer>
          </form>
        </main>
      </section>
    </>
  )
}
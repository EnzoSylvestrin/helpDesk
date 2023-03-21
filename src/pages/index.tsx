import { useState } from 'react';

import { FaUserAlt, FaHeadset, FaGhost } from 'react-icons/fa';

import Head from 'next/head';

import { OptionsFunc, OptionsType } from '@/Utils/Options';

import { Header } from '@/Components/Header/Header';
import { Timer } from '@/Components/Timer';
import { Input } from '@/Components/Input';
import { Text } from '@/Components/Text';
import { RadioGroup } from '@/Components/RadioGroup';
import { Button } from '@/Components/Button';

export default function Home() {

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <>
      <Head>
        <title>Cadastro de chamados</title>
        <meta name="description" content="Site para registro de chamados para funcionamento" />
        <meta name="author" content='Enzo Sylvestrin - enzospavani@gmail.com' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`${theme === 'dark' ? 'dark' : ''}`}>
        <main className='min-h-[100vh] bg-grayMain dark:bg-darkMain'>
          <Header pageTitle='Cadastro de chamados' setTheme={setTheme} />
          <form className=''>
            <Timer />
            <div className='h-[80vh] px-10 flex flex-wrap mt-3'>
              <div className='w-[45%] max-w-[450px] p-5 h-[85%] gap-5 flex flex-col'>
                <label htmlFor='user'>
                  <Text className={'mb-2 !text-[19px]'}>Funcionário:</Text>
                  <Input.Root>
                    <Input.Icon icon={FaUserAlt} size={16} colored />
                    <Input.Select 
                      placeholder='Selecione o funcionário...' 
                      items={OptionsFunc} 
                      id={'user'}
                    />
                  </Input.Root>
                </label>
                <label htmlFor='client'>
                  <Text className={'mb-2 !text-[19px]'}>Cliente:</Text>
                  <Input.Root>
                    <Input.Icon icon={FaUserAlt} size={16} colored />
                    <Input.Select 
                      placeholder='Selecione o cliente...' 
                      items={OptionsFunc} 
                      id={'client'}
                    />
                  </Input.Root>
                </label>
                <label htmlFor='fantasy'>
                  <Text className={'mb-2 !text-[19px]'}>Fantasia:</Text>
                  <Input.Root>
                    <Input.Icon icon={FaGhost} size={16} colored />
                    <Input.Select 
                      placeholder='Selecione a fantasia...' 
                      items={OptionsFunc} 
                      id={'fantasy'}
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
                    />
                  </Input.Root>
                </label>
                <label className='mt-5'>
                  <Text className={'mb-2 !text-[19px]'}>Status:</Text>
                  <RadioGroup
                    className='mt-4'
                    Radios={[
                      {value: 'Pendente', color: 'text-yellow-500 after:bg-yellow-500 border-yellow-500'},
                      {value: 'Concluído', color: 'text-green-500 after:bg-green-500 border-green-500'}
                    ]}
                  />
                </label>
              </div>
              <div className='flex-1 h-[85%] p-5 flex flex-col'>
                <label htmlFor='description' className='h-[90%]'>
                  <Text className={'mb-2 !text-[19px]'}>Mensagem:</Text>
                  <Input.Root className='!h-full'>
                    <Input.TextArea className='h-full' placeholder='Descreva o que ocorreu durante o chamado..'/>
                  </Input.Root>
                </label>
              </div>
              <footer className='w-full px-5 h-[8vh] flex items-center justify-between'>
                <Button size='lg' text='Consulta' />
                <Button size='lg' text='Registrar' />
              </footer>
            </div>
          </form>
        </main>
      </section>
    </>
  )
}

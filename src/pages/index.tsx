import { useState } from 'react';

import { FaUserAlt, FaHeadset, FaGhost } from 'react-icons/fa';

import { OptionsFunc, OptionsType } from '@/Utils/Options';

import { Header } from '@/Components/Header/Header';
import { Timer } from '@/Components/Timer';
import { Input } from '@/Components/Input';
import { Text } from '@/Components/Text';
import { RadioGroup } from '@/Components/RadioGroup';
import { Button } from '@/Components/Button';
import { HeadComponent } from '@/Components/HeadComponent';
import { Description } from '@/Components/Description';

export default function Home() {

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <>
      <HeadComponent title='Cadastro de chamados' />
      <section className={`${theme === 'dark' ? 'dark' : ''}`}>
        <main className='min-h-[100vh] transition-colors duration-300 bg-grayMain dark:bg-darkMain'>
          <Header pageTitle='Cadastro de chamados' setTheme={setTheme} />
          <form className=''>
            <Timer />
            <div className='h-auto py-[10px] px-[5px] flex flex-col flex-wrap mt-3 md:px-10 sm:flex-row sm:h-[80vh]'>
              <div className='w-full max-w-full px-2 py-[10px] xs:px-5 xs:py-[10px] sm:w-[45%] sm:max-w-[450px] p-5 h-[85%] gap-5 flex flex-col'>
                <label htmlFor='user'>
                  <Text className={'mb-2 !text-[19px]'}>Funcionário:</Text>
                  <Input.Root>
                    <Input.Icon icon={FaUserAlt} size={18} colored />
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
                    <Input.Icon icon={FaUserAlt} size={18} colored />
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
                    <Input.Icon icon={FaGhost} size={18} colored />
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
              <div className='px-2 h-[350px] xs:px-5 xs:w-full xs:flex-none sm:flex-1 sm:py-[10px] sm:h-[85%] p-5 flex flex-col'>
                <Description />
              </div>
              <footer className='w-full px-2 xs:px-5 h-[8vh] flex items-center justify-between'>
                <Button size='lg' href='/Consulta' text='Consulta' />
                <Button size='lg' type='submit' text='Registrar' />
              </footer>
            </div>
          </form>
        </main>
      </section>
    </>
  )
}

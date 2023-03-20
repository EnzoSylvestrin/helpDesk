import { useState } from 'react';

import Head from 'next/head';

import { Header } from '@/Components/Header/Header';

export default function Home() {

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <>
      <Head>
        <title>Registro - Chamados</title>
        <meta name="description" content="Site para registro de chamados para funcionamento" />
        <meta name="author" content='Enzo Sylvestrin - enzospavani@gmail.com' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`${theme === 'dark' ? 'dark' : ''}`}>
        <div className='min-h-[100vh] bg-grayMain dark:bg-darkMain'>
          <Header pageTitle='Cadastro de chamados' setTheme={setTheme} />
        </div>
      </section>
    </>
  )
}

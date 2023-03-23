import { useEffect, useState } from 'react';
import '@/styles/globals.css';

import 'react-tooltip/dist/react-tooltip.css';

import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import LoadingRouter from '@/Components/LoadingRouter';

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  return <>
    <LoadingRouter isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
    <Component {...pageProps} />
  </>
}

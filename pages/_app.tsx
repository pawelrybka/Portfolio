import type { AppProps } from 'next/app'
import Head from 'next/head';
import '../src/variables.css'
import '../src/index.css';
import Header from '../src/components/ui/header/Header'
import Footer from '@/src/components/ui/footer/Footer';

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <div className='color-layout layout-blue'></div>
      <div className='color-layout layout-purple'></div>
      <Footer/>
    </>
  )
}

export default App



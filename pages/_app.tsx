import '../src/variables.css'
import '../src/index.css';
import type { AppProps } from 'next/app'
import Navbar from '@/src/components/navbar/navbar';
import Footer from '@/src/components/footer/footer';
import Head from 'next/head';

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <div className='color-layout layout-blue'></div>
      <div className='color-layout layout-purple'></div>
      <Footer/>
    </>
  )
}

export default App


import '../src/variables.css'
import '../src/index.css';
import type { AppProps } from 'next/app'
import Navbar from '@/src/components/navbar/navbar';
import Footer from '@/src/components/footer/footer';
import Head from 'next/head';

function App ({ Component, pageProps }: AppProps) {
  return (
    <div className='content'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <div className='color-layout layout-blue'></div>
      <div className='color-layout layout-purple'></div>
      <Footer/>
    </div>
  )
}

export default App


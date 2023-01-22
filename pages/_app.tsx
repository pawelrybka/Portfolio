import '../src/variables.css'
import '../src/index.css';
import type { AppProps } from 'next/app'
import Navbar from '@/src/components/navbar/navbar';
import Footer from '@/src/components/footer/footer';
import Head from 'next/head';
import Content from '../src/content/content'

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
      </Head>
      <Content>
        <Navbar/>
				<Component {...pageProps} />
        <div className='color-layout layout-blue'></div>
        <div className='color-layout layout-purple'></div>
        <Footer />
      </Content>
    </>
  )
}

export default App


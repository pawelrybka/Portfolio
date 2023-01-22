import '../src/variables.css'
import '../src/index.css';
import type { AppProps } from 'next/app'
import Navbar from '@/src/components/navbar/navbar';
import Footer from '@/src/components/footer/footer';


function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <div className='color-layout layout-blue'></div>
      <div className='color-layout layout-purple'></div>
      <Footer/>
    </>
  )
}

export default App
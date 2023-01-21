import '../src/variables.css'
import '../src/index.css';
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div className='color-layout layout-blue'></div>
      <div className='color-layout layout-purple'></div>
    </>


  )
  
  
  





}


export default App
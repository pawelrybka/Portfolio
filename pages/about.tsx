import Head from 'next/head'
import About from '../src/content/about/about'

const index = () => {
  return (
    <>
      <Head>
        <title>About me section</title>
      </Head>
      <About/>
    </>
  )
}

export default index

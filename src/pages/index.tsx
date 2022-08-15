import type { NextPage } from 'next'
import Head from 'next/head'

import Switch from '../components/funcional/Switch'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aplicacion de practica</title>
        <meta name="description" content="Generada con NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Switch />
    </div>
  )
}

export default Home

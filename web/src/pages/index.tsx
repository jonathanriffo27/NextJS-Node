import type { NextPage } from "next";
import Head from "next/head";

import Switch from "../components/funcional/Switch";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aplicacion de practica</title>
        <meta name="description" content="Generada con NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Switch />
    </>
  );
};

export default Home;

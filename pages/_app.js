// pages/_app.js
import Head from 'next/head';
import '../src/app/globals.css'; // Importez vos styles globaux ici

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Autres balises meta, styles ou scripts globaux */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

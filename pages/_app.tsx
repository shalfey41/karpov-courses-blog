import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import themeClasses from '../styles/theme.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Мой блог</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={themeClasses.page}>
        <div className={themeClasses.container}>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;

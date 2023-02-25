import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Quicksand } from '@next/font/google';
import store from '@/redux/store';
import { Provider } from 'react-redux';

const quicksand = Quicksand({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${quicksand.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Provider>
  );
}

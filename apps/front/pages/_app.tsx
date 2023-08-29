import './styles.css';
import '@elastic/eui/dist/eui_theme_light.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

import { EuiProvider } from '@elastic/eui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());
  return (
    <>
      <Head>
        <title>Welcome to front!</title>
      </Head>
      <main className="app">
        <EuiProvider colorMode="light">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </EuiProvider>
      </main>
    </>
  );
}

export default CustomApp;

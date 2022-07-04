import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import SEO from '~config/next-seo';
import store from '~config/store';

import '~styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<meta charSet="UTF-8" />
		</Head>
		<DefaultSeo {...SEO} />
		<StoreProvider store={store}>
			<div className="flex justify-center flex-col items-center w-full min-h-screen">
				<Component {...pageProps} />
			</div>
		</StoreProvider>
	</>
);

export default MyApp;

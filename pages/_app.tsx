/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AppProps } from 'next/app'
import '../src/styles/globals.css';


const app = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default app;

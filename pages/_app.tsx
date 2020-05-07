import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store/makeStore';
import '../stylesheet/main.css';

type Props = {
    Component: React.Component;
    store: any;
};

class MyApp extends App<Props> {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <div>
                <Head>
                    <title>App on next js</title>
                    <meta name="description" content="App on next js" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </div>
        );
    }
}

export default withRedux(makeStore)(MyApp);

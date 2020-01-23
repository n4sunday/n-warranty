import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/withReduxStore'
import { Provider } from 'react-redux'

import '../styles/global.scss'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}
export default withReduxStore(MyApp)

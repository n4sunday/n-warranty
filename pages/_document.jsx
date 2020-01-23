import Document, { Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head >
                    <title>w-warranty</title>
                    <meta name="viewport" content="width=device-width, initial-   scale=1" />
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.min.css' />
                    <link href="https://fonts.googleapis.com/css?family=Prompt&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
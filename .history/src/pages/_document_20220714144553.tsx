import Document, { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
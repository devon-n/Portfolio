import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="Blockchain/Full stack/Artificial Intelligence developer portfolio" />
          <meta name="keywords" content="solutions architect blockchain artificial intelligence solidity portfolio software developer web3" />
        </Head>
        <body
          className="bg-fixed bg-gradient-to-r from-background-light to-primary-light dark:from-background-dark dark:to-primary-dark dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
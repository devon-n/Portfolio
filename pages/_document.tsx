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
          <title>Devon Nathan Portfolio</title>
          <meta name="description" content="Blockchain/Full stack/Artificial Intelligence developer portfolio" />
          <meta name="keywords" content="blockchain artificial intelligence solidity portfolio software developer web3" />
        </Head>
        <body 
            className="bg-fixed bg-gradient-to-r from-gray-200 to-blue-300 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
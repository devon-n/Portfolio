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
        </Head>
        <body className="transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>

    );
  }
}

export default MyDocument;
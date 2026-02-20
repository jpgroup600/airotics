import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" translate="no" className="notranslate">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />

        {/* Additional Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="google" content="notranslate" />
      </Head>
      <body className="overscroll-none antialiased notranslate">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

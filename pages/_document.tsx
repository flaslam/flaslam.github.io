import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />

          <Script strategy="lazyOnload" id="gtag">
            {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              }); `}
          </Script>
        </Head>
        <body className="dark:bg-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

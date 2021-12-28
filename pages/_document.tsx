import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swp" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>      
    </Html>
    )
  }
}

export default MyDocument
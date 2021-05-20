import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const theme = {
    mobile: `(max-width: 479px)`,
    tablet: `(max-width: 767px)`,
    laptop: `(max-width: 991px)`,
    primary: "rgb(200,8,21)",
    text: "#314455",
    background: "#FFFFFF",
  };

  return (
    <>
      <Head>
        <title>Mateusz Chojnowski's Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

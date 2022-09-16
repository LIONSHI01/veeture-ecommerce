import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { BaseTheme, DarkTheme } from "../styles/theme";
import Layout from "../components/Layout";

import "../styles/nprogress.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={BaseTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

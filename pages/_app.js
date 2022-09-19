import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { BaseTheme, DarkTheme } from "../styles/theme";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../store/store";

import "react-toastify/dist/ReactToastify.css";
import "../styles/nprogress.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider theme={BaseTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;

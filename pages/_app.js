import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { BaseTheme, DarkTheme } from "../styles/theme";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../store/store";

import "react-toastify/dist/ReactToastify.css";
import "../styles/nprogress.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={BaseTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { BaseTheme, DarkTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={BaseTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

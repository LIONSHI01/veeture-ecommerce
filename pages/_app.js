import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../store/store";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";

import { Layout } from "../components";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/nprogress.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const queryClient = new QueryClient();

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-right"
              progressClassName="toastProgress"
              bodyClassName="toastBody"
            />
          </Layout>
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;

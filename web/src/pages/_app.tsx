import "../styles/app.css";
import type { AppProps } from "next/app";

import store from "../redux/store";
import { Provider } from "react-redux";
import Switch from "../components/funcional/Switch";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Switch>
        <Component {...pageProps} />
      </Switch>
    </Provider>
  );
}

export default MyApp;

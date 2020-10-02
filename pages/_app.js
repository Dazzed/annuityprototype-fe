import { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("jquery").then(($) => {
      window.$ = window.jQuery = $;
      return import("bootstrap");
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

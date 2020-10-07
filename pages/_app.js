import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("jquery").then(($) => {
      window.$ = window.jQuery = $;
      return import("bootstrap");
    });
  }, []);

  return <Component {...pageProps} className="container" />;
}

export default MyApp;

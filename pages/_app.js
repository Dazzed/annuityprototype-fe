import { useEffect } from "react";
import "../styles/jquery.dataTables.min.css";
import "../styles/responsive.dataTables.min.css";
import "../styles/buttons.dataTables.min.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

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

import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";
import { wrapper } from "../store/store";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

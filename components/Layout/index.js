import Cookies from "js-cookie";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../store/actions/userActions";
import Footer from "./Footer";
import FooterDemo from "./FooterDemo";

import Header from "./Header";

const Layout = ({ children, title = "Directory Listing" }) => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(token));
  }, []);

  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <Head>
        <title>Softfy | {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
      {/* <FooterDemo /> */}
    </div>
  );
};

export default Layout;

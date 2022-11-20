import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => smoothscroll.polyfill(), []);
  return <Component {...pageProps} />;
}

export default MyApp;

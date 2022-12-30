import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import NarBar from "../src/components/NavBar";
import TopProgressBar from "../src/components/TopProgressBar";
import "../styles/globals.css";
import "../styles/TopProgressBar.css";

function MyApp({ Component, pageProps }) {
  const route = useRouter();

  useEffect(() => {
    const handleProgressStart = () => {
      NProgress.start();
    };
    const handleProgressStop = () => {
      NProgress.done();
    };
    route.events.on("routeChangeStart", handleProgressStart);
    route.events.on("routeChangeError", handleProgressStop);
    route.events.on("routeChangeComplete", handleProgressStop);
    return () => {
      route.events.off("routeChangeStart", handleProgressStart);
      route.events.off("routeChangeError", handleProgressStop);
      route.events.off("routeChangeComplete", handleProgressStop);
    };
  }, [route]);

  return (
    <>
      <NarBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

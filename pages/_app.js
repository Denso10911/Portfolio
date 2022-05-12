import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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

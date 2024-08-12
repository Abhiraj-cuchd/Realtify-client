import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <div className="layout">
    <Navbar />
    <Component {...pageProps} />
  </div>;
}

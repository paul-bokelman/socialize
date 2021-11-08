import { useEffect } from "react";
import { useStore } from "../hooks";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { dark } = useStore();
  useEffect(() => {
    if (dark) {
      document.querySelector("html")!.classList.add("dark");
    } else {
      document.querySelector("html")!.classList.remove("dark");
    }
    document.querySelector("body")!.classList.add("bg-white");
    document.querySelector("body")!.classList.add("dark:bg-[#0D1116]");
    document.querySelector("body")!.classList.add("transition");
    document.querySelector("body")!.classList.add("duration-500");
  }, [dark]);
  return <Component {...pageProps} />;
}

export default MyApp;

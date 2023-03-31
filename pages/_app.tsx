import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { lightTheme } from "../stitches.config";
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<any>(null);

  useEffect(() => {
    let theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
  }, []);

  if (!theme) {
    return; 
  }

  return <ThemeProvider
            attribute="class"
            defaultTheme="darkTheme"
            value={{
              dark: "dark",
              light: lightTheme.className
            }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
}

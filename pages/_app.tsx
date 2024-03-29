import '@/styles/globals.css'
import '@/styles/perspective-grid.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { lightTheme } from "../stitches.config";
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<any>(null);

  useEffect(() => {
    let theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
  }, []);

  if (!theme) {
    return; 
  }

  return <DndProvider backend={HTML5Backend}>
    <ThemeProvider
            attribute="class"
            defaultTheme="darkTheme"
            value={{
              dark: "dark",
              light: lightTheme.className
            }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  </DndProvider>
}

import '../styles/globals.css'
import "../styles/nprogress.css"
import nProgress from 'nprogress'
import Router from "next/router"

import Axios from "axios"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

Router.events.on("routeChangeStart", () => { nProgress.start() })
Router.events.on("routeChangeComplete", () => { nProgress.done() })
Router.events.on("routeChangeError", () => { nProgress.done() })

function MyApp({ Component, pageProps }) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL
  const colors = {
    accent: "#3498db",
    primary: "#34495e",
    light: "#ecf0f1",
    mustard: "#f1c40f"
  }

  const fonts = {
    body: "Poppins, sans-serif",
  }

  const theme = extendTheme({
    colors,
    fonts
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

import dotenv from "dotenv"
import Layout from "@/components/Layout"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  dotenv.config()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

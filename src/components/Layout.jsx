import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import NextNProgressClient from "./ProgessBar/ProgressBar"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NextNProgressClient />

      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

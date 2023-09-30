import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

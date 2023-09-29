import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

export default function Layout({ children }) {
  return (
    <div className="h-100">
      <Navbar />
      {children}
    </div>
  )
}

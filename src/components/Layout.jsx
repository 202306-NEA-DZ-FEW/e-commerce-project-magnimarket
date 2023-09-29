import Footer from "./Foter/Foter"
import Navbar from "./Navbar/Navbar"

export default function Layout({ children }) {
  return (
    <div className="h-100">
      <Navbar />

      {children}
    </div>
  )
}

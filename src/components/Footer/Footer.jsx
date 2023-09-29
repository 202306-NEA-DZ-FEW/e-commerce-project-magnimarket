import ItemsContainer from "../../components/Footer/ItemsContainer"

export default function Footer() {
  const current_year = new Date().getFullYear()
  return (
    <footer className="bg-accent text-white h-50 w-full mt-6">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10
        text-center pt-2 text-white text-sm pb-6"
      >
        <span>Copyright © {current_year}. All Rights Reserved.</span>
        <span>Terms of use | Privacy Policy</span>
      </div>
    </footer>
  )
}

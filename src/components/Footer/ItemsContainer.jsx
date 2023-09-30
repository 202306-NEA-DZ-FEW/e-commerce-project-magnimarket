import Item from "./Item"

export default function ItemsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-5 sm:px-12 py-8 mx-auto ">
      <Item
        githubLink="https://github.com/mohamed-cheraitia"
        linkedinLink="https://www.linkedin.com/in/mohamed-ch-947939272/"
        title="Mohamed Cheraitia"
      />
      <Item githubLink="#" linkedinLink="#" title="Ossama Barka" />
      <Item githubLink="#" linkedinLink="#" title="Mouloud Mecheter" />
      <Item githubLink="#" linkedinLink="#" title="Mohamed Mattasi" />
      <Item githubLink="#" linkedinLink="" title="Milyssa Sidisaid" />
    </div>
  )
}

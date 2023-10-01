import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Item({ title, githubLink, linkedinLink }) {
  return (
    <div className="bg- shadow-md border shadow-black rounded-lg p-4 text-center">
      <h2 className="text-l text-border font-semibold">{title}</h2>
      <div className=" mt-4 text-center">
        <a href={githubLink} target="_blank">
          <span
            className=" cursor-pointer inline-flex items-center
    bg-orange-500 mx-1.5 text-xl hover:text-gray-100 hover:bg-accent
    duration-300 rounded-full h-8 w-8  justify-center"
          >
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>
        <a href={linkedinLink} target="_blank">
          <span
            className="p-2 cursor-pointer inline-flex items-center
    bg-blue-500 mx-1.5 text-xl hover:text-gray-100 hover:bg-accent
    duration-300 rounded-full h-8 w-8 justify-center"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </a>
      </div>
    </div>
  )
}

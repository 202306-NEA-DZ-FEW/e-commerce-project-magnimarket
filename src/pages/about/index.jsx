// components/HeroSection.js
import React from "react"
import { FaLinkedinIn } from "react-icons/fa"
const HeroSection = () => {
  const teamMembers = [
    {
      name: "Mouloud",
      linkedin: "https://www.linkedin.com/in/mouloud-mecheter-4a3701166/",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFEVj3F6unZOw/profile-displayphoto-shrink_200_200/0/1690826884593?e=1701302400&v=beta&t=GQ3UGq-OesMSYYaOyv0fltd-zMtSBLrEsADTgOYjrFY",
      github: "https://github.com/mouloud247",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
    },
    {
      name: "M.Mohamed",
      linkedin: "https://www.linkedin.com/in/matassi-mohamed/",
      image:
        "https://media.licdn.com/dms/image/D4E03AQHEx7eebY2okQ/profile-displayphoto-shrink_200_200/0/1696179669592?e=1701907200&v=beta&t=WLODjKHD8K51SwZn5NsO8q6mhzMxQ-ykLu2iI2BznLk",
      github: "https://github.com/M07am3dM",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
    },
    {
      name: "C.Mohamed",
      linkedin: "",
      github: "https://github.com/mohamed-cheraitia",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
      image:
        "https://i.pinimg.com/280x280_RS/54/68/86/54688644972d81003387b06e77876443.jpg",
    },
    {
      name: "Oussama",
      linkedin: "https://www.linkedin.com/in/oussama13/",
      image:
        "https://media.licdn.com/dms/image/D4E03AQECYNARlTXn0Q/profile-displayphoto-shrink_400_400/0/1690369687092?e=1701302400&v=beta&t=pyYT2CYuBqNv0UkcL90t2QSKELrLDbodQtkVgPJmeXE",
      github: "https://github.com/0m3ga13/",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
    },
    {
      name: "Melissa",
      linkedin: "https://www.linkedin.com/in/milyssa-sidisaid-46170a232/",
      image:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      github: "https://github.com/melissasidisid",
      skills: ["React", "JavaScript", "CSS", "NextJS"],
    },
  ]

  return (
    <div
      className="relative py-24 sm:py-32 "
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1536300099515-6c61b290b654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')`,
      }}
    >
      <div className="flex flex-wrap justify-center px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Who Are We?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are a talented team of frontend developers from Recoded Bootcamp,
            passionate about creating amazing web experiences.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex flex-wrap text-base font-semibold leading-7 text-white items-center lg:space-x-20 md:space-x-10 space-x-5 justify-center">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <div className="mb-5">
                  <div className=" group flip-card">
                    <div className="flip-card-inner relative flex flex-col items-center">
                      <div className="flip-card-front absolute">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 bg-black object-cover rounded-full border text-center mx-auto mb-6 transform transition-transform duration-300"
                        />
                      </div>
                      <div className="flip-card-back ">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedinIn className="w-32 h-32 bg-blue-900 object-fit rounded-full border transform transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2s">
                  {member.name}
                </h3>
                <ul className="list-disc list-inside text-gray-300">
                  {member.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Profile <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

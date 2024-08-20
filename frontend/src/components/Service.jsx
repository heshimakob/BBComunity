import React from 'react'

const Service = () => {
  return (
    <div className="container mx-auto  h-500 px-4 py-16 ">
    <h1 className="text-4xl font-bold mb-8 text-center">
      About The Odin Project
    </h1>
    <p className="text-lg mb-6">
      The Odin Project is one of those "What I wish I had when I was learning"
      resources. Not everyone has access to a computer science education or
      the funds to attend an intensive coding school and neither of those is
      right for everyone anyway. This project is designed to fill in the gap for
      people who are trying to hack it on their own but still want a high
      quality education.
    </p>
    <h2 className="text-3xl font-bold mb-4">
      What you can expect at The Odin Project
    </h2>
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 2a1 1 0 00-1 1v1h2V3a1 1 0 00-1-1zm0 8a1 1 0 00-1 1v3h2v-3a1 1 0 00-1-1zm0-4a1 1 0 00-1 1v3h2V7a1 1 0 00-1-1z" />
        </svg>
        <div>
          <h3 className="text-xl font-bold">
            A full roadmap to becoming a developer
          </h3>
          <p className="text-lg">
            Our free, comprehensive curriculum will equip you to be a full
            stack developer, no matter your current experience level.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z" />
        </svg>
        <div>
          <h3 className="text-xl font-bold">Learn by doing</h3>
          <p className="text-lg">
            The most effective learning happens while building projects, so we
            have strategically placed them throughout our curriculum. These
            projects will make a strong portfolio for you to showcase on your
            resume.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4a2 2 0 01-2-2v-8a2 2 0 012-2h8zm-8 9a1 1 0 01-.894.553L7.383 13H4a1 1 0 01-1-1V7a1 1 0 011-1h3.383L10 11.447A1 1 0 019.106 12z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <h3 className="text-xl font-bold">
            Receive support from others
          </h3>
          <p className="text-lg">
            The maintainers of the curriculum run a Discord community, with
            the help of countless other volunteers, where you can receive help
            with anything in our curriculum.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Service
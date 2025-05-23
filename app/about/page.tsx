import { Education } from "../components/about/Education"
import { Experience } from "../components/about/Experience"
import { Skills } from "../components/about/Skills"
import { Link } from "../components/common/Link"
import { ProfilePicture } from "../components/common/ProfilePicture"

const bio = `I enjoy looking at problems from a high level and creatively finding the most effective solution. I've been coding for over 8 years and enjoy frontend and full-stack development, focusing on performance, accessibility, and user-first design.

Outside of programming, I love exploring new hobbies, listening to music, hosting game nights with friends, and being a cat mom to my 2 orange kitties.`

export default function About() {
  return (
    <main className="p-10">
      <div className="mb-8 flex justify-center">
        <ProfilePicture width={180} />
      </div>
      
      <section className="mb-12 text-center">
        <h1 className='text-4xl font-bold mb-4'>Kaitlyn Rice</h1>
        <p className='mb-2 whitespace-pre-line'>{bio}</p>
      </section>
      
      <Experience />
      <Education />
      <Skills />
      
      <Link href="/" className="hover:text-pink-600">
        Go Home
      </Link>
    </main> 
  )
}

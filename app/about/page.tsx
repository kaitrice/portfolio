import { Education } from "../components/about/Education";
import { Experience } from "../components/about/Experience";
import { Link } from "../components/common/Link";
import { ProfilePicture } from "../components/common/ProfilePicture";

export default function About() {
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-48 xl:px-100 2xl:px-150 py-6">
      <div className="mb-8 flex justify-center">
        <ProfilePicture width={180} />
      </div>
      
			<div>
        <div className="mb-12 text-center">
          <h1 className='text-4xl font-bold mb-4'>Kaitlyn Rice</h1>
          <p className='mb-2'>a developer and creative problem solver who builds clean, thoughtful digital experiences. I specialize in modern web and mobile development, with a focus on performance, accessibility, and user-first design. Whether it's launching full-stack apps, refining frontend interfaces, or integrating third-party APIs, I love turning ideas into practical, impactful solutions.</p>
        </div>
        
        {/* Experience */}
        <div className="mb-8">
          <h2 className='text-2xl font-bold mb-4'>Experience</h2>
          <Experience />
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className='text-2xl font-bold mb-4'>Education</h2>
          <Education />
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className='text-2xl font-bold mb-4'>Skills</h2>

        </div>
      </div>

      <Link href="/" className="hover:text-pink-600">
        Go Home
      </Link>
    </div> 
  )
}

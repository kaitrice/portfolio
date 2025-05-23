import { Education } from "../components/about/Education";
import { Experience } from "../components/about/Experience";
import { Skills } from "../components/about/Skills";
import { Link } from "../components/common/Link";
import { ProfilePicture } from "../components/common/ProfilePicture";

export default function About() {
  return (
    <div className="p-10">
      <div className="mb-8 flex justify-center">
        <ProfilePicture width={180} />
      </div>
      
			<div>
        <div className="mb-12 text-center">
          <h1 className='text-4xl font-bold mb-4'>Kaitlyn Rice</h1>
          <p className='mb-1'>I&apos;m a developer and creative problem solver driven by a love for combining the logical side of coding with creative UX design, making every project an exciting challenge. I enjoy modern web and mobile development, focusing on performance, accessibility, and user-first design. Whether it&apos;s launching full-stack apps, refining frontend interfaces, or integrating third-party APIs, I love turning ideas into practical, impactful solutions.</p>
          <p className='mb-2'>I like building, breaking, and exploring ideas. Mostly experimenting. Occasionally finishing. Always learning.</p>
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
          <Skills />
        </div>
      </div>

      <Link href="/" className="hover:text-pink-600">
        Go Home
      </Link>
    </div> 
  )
}

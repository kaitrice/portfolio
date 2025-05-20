import Image from 'next/image'

export default function About() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-128 py-6">
      <Image src="/images/Headshot_Kaitlyn.webp" alt="Portrait of Kaitlyn" width={128} height={128} className="mb-6 rounded-full shadow" />
      
			<h1 className='text-4xl font-bold mb-4'>I'm Kaitlyn Rice</h1>
      <p className='mb-2'>a developer and creative problem solver who builds clean, thoughtful digital experiences. I specialize in modern web and mobile development, with a focus on performance, accessibility, and user-first design. Whether it's launching full-stack apps, refining frontend interfaces, or integrating third-party APIs, I love turning ideas into practical, impactful solutions.</p>
      <p className='mb-2'>Next</p>
      <p>Next</p>
    </div> 
  )
}

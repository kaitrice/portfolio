import { Metadata } from "next"
import { Education } from "../_components/about/Education"
import { Experience } from "../_components/about/Experience"
import { Skills } from "../_components/about/Skills"
import { Bio } from "../_components/about/Bio"
import content from "../_data/about.json"

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
}

export default function About() {
  return (
    <main className="flex flex-col items-center my-4">
      <Bio />
      <Experience />
      <Education />
      <Skills />
    </main> 
  )
}

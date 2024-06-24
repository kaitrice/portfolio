import Skill from './skill'
import { technologies } from '../../data'

export default function Projects() {
  return (
    <section id='skills' className='text-center'>
      <h2 className='fw-bold'>Technologies</h2>
      <Skill
        data={technologies}
      />
    </section>
  )
}
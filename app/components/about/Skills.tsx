import { getSkills } from "@/app/utils/skills";
import { iconMap } from "@/app/utils/utils";
import { Icon } from '@iconify/react'

export function Skills() {
  const skills = getSkills()
  
  return (
	<section className="mb-8">
		<h2 className='text-2xl font-bold mb-6'>Tech Stack</h2>
		<div className="flex flex-wrap gap-10 justify-center rounded-xl">
			{skills.map((skill) => {
				const key = skill.toLowerCase()
				const icon = iconMap[key as keyof typeof iconMap]

				return (
					<div key={skill} className="flex flex-col items-center gap-2 hover:scale-125 transition">
						{icon && <Icon icon={icon} width={56} height={56} />}
						<span className="font-semibold text-sm">{skill}</span>
					</div>
				)
			})}
		</div>
	</section>
  )
}
import { Icon } from '@iconify/react'
import data from "../../_lang/en.json"
import { findIcon } from '@/app/_utils'

const skills = data.skills

function Skill({ skill }: { skill: string }) {
	const icon = findIcon(skill)
	
	return (
		<div key={skill} className="flex flex-col items-center gap-2 hover:scale-125 transition">
			{icon && <Icon icon={icon} width={56} height={56} />}
			<span className="font-semibold text-sm">{skill}</span>
		</div>
	)
}

export function Skills() {
	return (
		<section className="w-full">
			<h2 className="text-2xl font-bold ">Tech Stack</h2>
			<div className="flex flex-col gap-2 mt-2">
				{Object.entries(skills).map(([category, skillList]) => (
					<div key={category} className="p-4">
						<h3 className="font-semibold text-lg capitalize mb-4">
							{category}
						</h3>
						<div className="flex flex-wrap gap-4 md:gap-8">
							{skillList.map((skill, index) => (
								<Skill key={index} skill={skill} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

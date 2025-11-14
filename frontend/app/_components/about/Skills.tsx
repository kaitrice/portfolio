import { Icon } from '@iconify/react'
import skillsData from "../../_data/skills.json"

function Skill({ name, icon }: { name: string, icon: string }) {

	return (
		<div className="flex flex-col items-center gap-2 hover:scale-125 transition">
			<Icon icon={icon} width={56} height={56} />
			<span className="font-semibold text-sm">{name}</span>
		</div>
	)
}

export function Skills() {
	return (
		<section className="w-full">
			<h2 className="text-2xl font-bold ">Tech Stack</h2>
			<div className="flex flex-col gap-2 mt-2">
				{Object.entries(skillsData).map(([category, skillList]) => (
					<div key={category} className="p-4">
						<h3 className="font-semibold text-lg capitalize mb-4">
							{category}
						</h3>
						<div className="flex flex-wrap gap-4 md:gap-8">
							{skillList.map((skillObj, index) => {
								const name = Object.keys(skillObj)[0]
								const icon = Object.values(skillObj)[0]
								return <Skill key={index} name={name} icon={icon} />
							})}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

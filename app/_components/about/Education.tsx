import { getEducation } from "@/app/_utils/education"
import { ProfilePicture } from "../common/ProfilePicture"
import { Education as EducationType } from "@/app/_utils/education.type"
import { formatDateToMonthYear } from "@/app/_utils/utils"
import { Dates } from "../common/Dates"



function School({ school }: { school: EducationType }) {
	const name = school.name
	const hasDates = (school.dates?.start_date || school.dates?.end_date)
	const minors = Array.isArray(school?.minors) ? school.minors : []
	const research = Array.isArray(school?.research) ? school.research : []

	return (
		<li>
			<article className="flex flex-row gap-4 mb-8 items-center">
				<ProfilePicture width={60} src={school.image.url} alt={`${name} logo`} />

				<div className="flex flex-col w-full">
					<header className="flex flex-col sm:flex-row sm:justify-between items-start gap-2">
						<h3 className="order-2 sm:order-1 flex-1 text-lg sm:text-xl font-bold">
							{name}
						</h3>
						{hasDates &&
							<Dates start_date={school.dates?.start_date ?? ""} end_date={school.dates?.end_date ?? ""} />
						}
					</header>

					<h4 className="text-sm text-gray-900 dark:text-white">{school.degree}</h4>

					<div className="my-1 text-sm text-gray-500 dark:text-gray-400 space-y-1">
						{minors.length > 0 && (
							<div className="flex flex-col sm:flex-row">
								<span className="font-bold mr-1">Minors:</span>
								<ul className="flex flex-wrap gap-1 items-center">
									{minors.map((item, index) => (
										<li key={index} className="flex items-center">
											{item}
											{index < minors.length - 1 && (
												<span className="mx-1" aria-hidden="true">
													&bull;
												</span>
											)}
										</li>
									))}
								</ul>
							</div>
						)}

						{research?.length > 0 && (
							<div className="flex flex-col sm:flex-row">
								<span className="font-bold mr-1">Research:</span>
								<ul className="flex flex-wrap gap-1 items-center">
									{research.map((item, index) => (
										<li key={index} className="flex items-center">
											{item}
											{index < research.length - 1 && (
												<span className="mx-1" aria-hidden="true">
													&bull;
												</span>
											)}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</article>
		</li>
	)
}

export function Education() {
	const education = getEducation()

	return (
		<section className="mb-8 w-full">
			<h2>Education</h2>
			<ol>
				{education.map((school, index) => (
					<School key={index} school={school} />
				))}
			</ol>
		</section>
	)
}

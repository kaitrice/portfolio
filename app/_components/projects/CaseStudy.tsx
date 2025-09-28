import { CaseStudyKey, caseStudyMap } from "@/app/_utils/utils"

export default function CaseStudyRenderer({ slug }: { slug: string }) {
	const CaseStudy = caseStudyMap[slug as CaseStudyKey]

	if (!CaseStudy) return null

	return (
		<article>
			{/* <CaseStudy /> */}
		</article>
	)
}
import { CaseStudyType } from "@/app/_types";

export function CaseStudy({ caseStudy }: { caseStudy: CaseStudyType }) {

    return (
        <section className="flex-shrink-0 mt-6">
            <article>
			    <h2>Problem</h2>
                {caseStudy.problem}
            </article>
            
            <article>
			    <h2>Cause & Impact</h2>
                {caseStudy.cause}
                {caseStudy.impact}
            </article>

            <article>
                <h2>Solutions</h2>
                {caseStudy.solution}
                {caseStudy.alt_solution}
            </article>

            <article>
                <h2>Challenges</h2>
                {caseStudy.challenges}
            </article>

            <article>
                <h2>Results</h2>
                {caseStudy.results}
            </article>
        </section>
    )
}
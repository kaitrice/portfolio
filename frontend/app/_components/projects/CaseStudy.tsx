import { CaseStudyType } from "@/app/_types";

export function CaseStudy({ caseStudy }: { caseStudy: CaseStudyType }) {

    return (
        <section className="flex-shrink-0 mt-6">
            <article>
			    <h2>Problem</h2>
                <p>{caseStudy.problem}</p>
            </article>
            
            <article>
			    <h2>Cause & Impact</h2>
                <p className="mb-2">{caseStudy.cause}</p>
                <p>{caseStudy.impact}</p>
            </article>

            <article>
                <h2>Solution</h2>
                <p className="mb-2">{caseStudy.solution}</p>
                <p>{caseStudy.alt_solution}</p>
            </article>

            <article>
                <h2>Challenges</h2>
                {caseStudy.challenges.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </article>

            {caseStudy.results && 
            <article>
                <h2>Results</h2>
                <p>{caseStudy.results}</p>
            </article>
            }
        </section>
    )
}
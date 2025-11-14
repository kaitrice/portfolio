import { CaseStudyType } from "@/app/_types";

export function CaseStudy({ caseStudy }: { caseStudy: CaseStudyType }) {

    return (
        <section className="flex-shrink-0 mt-6">
            {caseStudy.project_description &&
                <article>
                    <h2>Project Description</h2>
                    <p>{caseStudy.project_description}</p>
                </article>
            }

            <article>
                <h2>Problem</h2>
                <p>{caseStudy.problem}</p>
            </article>

            {(caseStudy.cause || caseStudy.impact) &&
                <article>
                    <h2>
                        {caseStudy.cause && "Cause"}
                        {caseStudy.cause && caseStudy.impact && " & "}
                        {caseStudy.impact && "Impact"}
                    </h2>
                    {caseStudy.cause && <p className="mb-2">{caseStudy.cause}</p>}
                    {caseStudy.impact && <p>{caseStudy.impact}</p>}
                </article>
            }

            <article>
                <h2>Solution</h2>
                <p className="mb-2">{caseStudy.solution}</p>
                <p>{caseStudy.alt_solution}</p>
            </article>

            <article>
                <h2>Challenges</h2>
                {caseStudy.challenges.map((item, index) => (
                    <p key={index} className={index < caseStudy.challenges.length - 1 ? "mb-2" : ""}>{item}</p>
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
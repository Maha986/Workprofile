import { steps } from "@/content";
import { SectionHead } from "./SectionHead";

export function Process() {
  return (
    <section id="process">
      <SectionHead eyebrow="How we work" title="From first call" accent="to handover." />
      <ol className="steps">
        {steps.map((s) => (
          <li key={s.title} className="step">
            <b>{s.title}</b>
            <p>{s.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

import { problems } from "@/content";
import { Rich } from "./Rich";
import { SectionHead } from "./SectionHead";
import { ownerLabel, tint } from "./owner";

export function Problems() {
  return (
    <section id="problems">
      <SectionHead eyebrow="Problems we solve" title="Tell us what’s" accent="slowing you down." />
      <ul className="problems">
        {problems.map((p) => (
          <li key={p.quote} className="prob" style={tint(p.owner)}>
            <q>{p.quote}</q>
            <p className="fix"><Rich text={p.fix} /></p>
            <span className="tag">{ownerLabel[p.owner]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

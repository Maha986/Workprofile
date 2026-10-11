import { people, work } from "@/content";
import { SectionHead } from "./SectionHead";
import { tint } from "./owner";

export function Work() {
  return (
    <section id="work">
      <SectionHead eyebrow="Selected work" title="What we’ve" accent="shipped." />
      <div className="work">
        {work.map((w) => (
          <article key={w.title} className="stopcard" style={tint(w.owner)}>
            <span className="dot" aria-hidden="true" />
            <div>
              <div className="who">
                {w.owner === "both" ? "Maha & Nouman" : people[w.owner].short} · {w.context}
              </div>
              <h3>{w.title}</h3>
              <p>
                {w.problem ? (
                  <>
                    <b>Problem:</b> {w.problem} <b>Built:</b> {w.built}
                  </>
                ) : (
                  w.built
                )}
              </p>
              {w.metric && (
                <div className="metric">
                  <strong>{w.metric.value}</strong>
                  <span>{w.metric.label}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

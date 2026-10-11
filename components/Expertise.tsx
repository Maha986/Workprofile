import { offers, people } from "@/content";
import { SectionHead } from "./SectionHead";
import { tint } from "./owner";

export function Expertise() {
  return (
    <section id="expertise">
      <SectionHead eyebrow="Expertise" title="Two specialists," accent="one team." />
      <div className="expert">
        {(["maha", "nouman"] as const).map((key) => {
          const p = people[key];
          return (
            <article key={key} className="person" style={tint(key)}>
              <div className="mono">{p.where}</div>
              <h3>{p.name}</h3>
              <div className="role">{p.role}</div>
              <div className="split">
                {p.groups.map((g) => (
                  <div key={g.title}>
                    <h4>{g.title}</h4>
                    <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                ))}
              </div>
              <dl className="facts">
                <dt>{p.credential.label}</dt>
                <dd>{p.credential.value}</dd>
              </dl>
            </article>
          );
        })}
      </div>
      <h3 className="offers-title">What you can hire us for</h3>
      <ul className="offers">
        {offers.map((o) => (
          <li key={o.title} className={o.owner === "both" ? "offer both" : "offer"} style={tint(o.owner)}>
            <b>{o.title}</b>
            <span>{o.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

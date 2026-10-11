import { brand, people } from "@/content";
import { tint } from "./owner";

const contacts = [
  { key: "maha", label: "Web apps" },
  { key: "nouman", label: "Data & SQL" },
] as const;

export function Contact() {
  return (
    <>
      <section className="cta" id="contact">
        <div className="mono">Start a project</div>
        <h2>
          Tell us what you need built. <em>We’ll reply with a plan.</em>
        </h2>
        <div className="contacts">
          {contacts.map(({ key, label }) => {
            const p = people[key];
            return (
              <div key={key} className="contact" style={tint(key)}>
                <div className="mono">{label} · {p.short}</div>
                <a className="addr" href={`mailto:${p.email}`}>{p.email}</a>
                <a className="link" href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              </div>
            );
          })}
        </div>
      </section>
      <footer className="footer">
        <span className="mono">© {new Date().getFullYear()} {brand.name}</span>
        <span className="mono">{brand.cities}</span>
      </footer>
    </>
  );
}

import { brand } from "@/content";

const links = [
  { href: "#problems", label: "Problems we solve" },
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },
];

export function Nav() {
  return (
    <nav aria-label="Main" className="nav">
      <a href="#top" className="mark">
        <i aria-hidden="true" />
        {brand.name}
      </a>
      <ul>
        {links.map((l) => (
          <li key={l.href} className="nav-secondary">
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta">Start a project</a>
        </li>
      </ul>
    </nav>
  );
}

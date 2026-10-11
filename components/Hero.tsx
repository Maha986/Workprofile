import { brand, people } from "@/content";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="mono">Full-stack web + data engineering · {brand.cities.replace(" · ", " & ")}</div>
      <h1>
        We build your <em>web app</em> and the <span className="d">data behind it.</span>
      </h1>
      <p className="lede">
        {people.maha.short} builds the product: interfaces, APIs, authentication and app databases.{" "}
        {people.nouman.short} builds the data layer: pipelines, warehouses and fast SQL. You hire one
        team instead of coordinating two vendors.
      </p>
      <div className="legend">
        <span><b style={{ background: "var(--product)" }} />{people.maha.name} · {people.maha.discipline}</span>
        <span><b style={{ background: "var(--data)" }} />{people.nouman.name} · {people.nouman.discipline}</span>
      </div>
      <div className="hero-actions">
        <a href="#contact" className="button">Start a project</a>
        <a href="#work" className="button ghost">See our work</a>
      </div>
    </header>
  );
}

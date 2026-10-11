export function SectionHead({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) {
  return (
    <div className="head">
      <div className="mono">{eyebrow}</div>
      <h2>
        {title} <em>{accent}</em>
      </h2>
    </div>
  );
}

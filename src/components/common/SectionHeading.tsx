export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className={`mb-3 text-[11px] font-medium tracking-[0.28em] uppercase ${light ? "text-line" : "text-muted"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-4xl leading-tight font-normal tracking-wide sm:text-6xl ${light ? "text-ink" : "text-paper"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-ink/70" : "text-muted"}`}>{text}</p> : null}
    </div>
  );
}

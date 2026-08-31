import Image from "next/image";

export function PageHero({ title, subtitle }) {
  return (
    <div className="bg-cream border-b border-cream2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-pine tracking-tight">{title}</h1>
        {subtitle ? <p className="mt-2 text-subink max-w-2xl">{subtitle}</p> : null}
      </div>
    </div>
  );
}

export function SectionHeading({ children }) {
  return (
    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-pine mb-4">
      {children}
    </h2>
  );
}

// imageFit="contain" is for logo-type images (e.g. a utility company mark): the
// image sits fully visible on white instead of being cropped to fill the slot.
export function Card({ href, image, imageFit, title, description, external }) {
  const Wrapper = ({ children }) =>
    href ? (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="group block bg-white border border-cream2 rounded-xl overflow-hidden hover:border-primary transition-colors"
      >
        {children}
      </a>
    ) : (
      <div className="bg-white border border-cream2 rounded-xl overflow-hidden">{children}</div>
    );

  return (
    <Wrapper>
      {image ? (
        <div className={`relative w-full h-40 ${imageFit === "contain" ? "bg-white p-4" : "bg-cream2"}`}>
          <Image src={image} alt={title} fill className={imageFit === "contain" ? "object-contain" : "object-cover"} />
        </div>
      ) : null}
      <div className="p-4">
        <h3 className="font-sans font-bold text-primary group-hover:text-accent transition-colors">{title}</h3>
        {description ? <p className="mt-1 text-sm text-subink">{description}</p> : null}
      </div>
    </Wrapper>
  );
}

export function InfoStrip({ facts }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {facts.map((f) => (
        <div key={f.label} className="bg-cream rounded-xl p-4 border border-cream2">
          <div className="text-xs font-sans font-bold uppercase tracking-wide text-primary">{f.label}</div>
          <div className="mt-1 text-pine font-semibold">{f.value}</div>
          {f.note ? <div className="mt-2 text-sm font-sans font-bold text-alert">{f.note}</div> : null}
        </div>
      ))}
    </div>
  );
}

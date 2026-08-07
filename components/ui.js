import Image from "next/image";

export function PageHero({ title, subtitle }) {
  return (
    <div className="bg-cream border-b border-cream2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h1 className="font-sans font-bold text-3xl sm:text-4xl text-primary tracking-tight">{title}</h1>
        {subtitle ? <p className="mt-2 text-subink max-w-2xl">{subtitle}</p> : null}
      </div>
    </div>
  );
}

export function SectionHeading({ children }) {
  return (
    <h2 className="font-sans font-bold text-xl sm:text-2xl text-primary tracking-wide uppercase border-b-2 border-accent inline-block pb-1 mb-4">
      {children}
    </h2>
  );
}

export function Card({ href, image, title, description, external }) {
  const Wrapper = ({ children }) =>
    href ? (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="group block bg-white border border-cream2 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
      >
        {children}
      </a>
    ) : (
      <div className="bg-white border border-cream2 rounded-lg overflow-hidden">{children}</div>
    );

  return (
    <Wrapper>
      {image ? (
        <div className="relative w-full h-40 bg-cream2">
          <Image src={image} alt={title} fill className="object-cover" />
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
        <div key={f.label} className="bg-cream rounded-lg p-4 border border-cream2">
          <div className="text-xs font-sans font-bold uppercase tracking-wide text-accent">{f.label}</div>
          <div className="mt-1 text-primary font-semibold">{f.value}</div>
        </div>
      ))}
    </div>
  );
}

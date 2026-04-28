type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex max-w-3xl flex-col gap-4">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-serif text-4xl text-paper sm:text-5xl">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#FBBE2C]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-[#0B1F33] md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

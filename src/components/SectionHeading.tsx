interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-bold">
        <span className="text-[#00E5FF] font-mono text-xl mr-2">{number}.</span>
        {title}
      </h2>
      <div className="h-[1px] bg-white/10 flex-grow max-w-xs"></div>
    </div>
  );
}

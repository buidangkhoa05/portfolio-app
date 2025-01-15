export function TypographyH1({ content }: { content: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {content}
    </h1>
  );
}

export function TypographyH2({ content }: { content: string }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {content}
    </h2>
  );
}

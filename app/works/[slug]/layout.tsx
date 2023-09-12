export default function AboutLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const slug = params.slug.split('-');
  const title = slug.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return (
    <>
      <head>
        <title>{title.join(' ')}</title>
      </head>
      {children}
    </>
  );
}

import type {ReactNode} from "react";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header className="h-40 bg-red-200">header</header>
      <main className="flex min-h-[calc(100dvh-20rem)] flex-col border border-red-500">
        {children}
      </main>
      <footer className="h-40 bg-red-200">footer</footer>
    </>
  );
}

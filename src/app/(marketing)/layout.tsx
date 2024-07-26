import type {ReactNode} from "react";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header className="h-[7.5rem] shadow">header</header>
      <main className="flex min-h-[calc(100dvh-15rem)] flex-col">
        {children}
      </main>
      <footer className="h-[7.5rem] shadow">footer</footer>
    </>
  );
}

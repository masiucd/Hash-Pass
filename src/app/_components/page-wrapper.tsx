import type {PropsWithChildren} from "react";

import {cn} from "../lib/cn";

type Props = {
  className?: string;
  fluid?: boolean;
};

export function PageWrapper({
  children,
  className,
  fluid,
}: PropsWithChildren<Props>) {
  return (
    <section
      className={cn(
        "mx-auto flex flex-col flex-1 md:max-w-6xl",
        fluid ? "max-w-full" : "max-w-screen-lg",
        className
      )}
    >
      {children}
    </section>
  );
}

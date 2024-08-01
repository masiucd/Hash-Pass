import "./globals.css";
import "@radix-ui/themes/styles.css";

import {Theme} from "@radix-ui/themes";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import type {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Hash Pass",
  description: "Generate secure passwords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          appearance="inherit"
          accentColor="mint"
          grayColor="olive"
          radius="medium"
          scaling="95%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}

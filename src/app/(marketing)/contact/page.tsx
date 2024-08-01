import type {Metadata} from "next";

import {PageWrapper} from "@/app/_components/page-wrapper";
import {H1, H3, P} from "@/app/_components/typography";

export const metadata: Metadata = {
  title: "Hash Pass | Contact",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <H1>Contact</H1>
      <H3>In construction ....</H3>
      <P>Will come soon</P>
    </PageWrapper>
  );
}

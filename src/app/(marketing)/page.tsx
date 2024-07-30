import {Flex} from "@radix-ui/themes";

import {HashPasswordForm} from "../_components/hash-password-form";
import {PageWrapper} from "../_components/page-wrapper";
import {H1, Lead} from "../_components/typography";
import {sleep} from "../lib/sleep";

export default async function Home() {
  await sleep(3000);
  return (
    <PageWrapper>
      <Flex direction="column" gap="2" my="3">
        <H1>Password Generator</H1>
        <Lead>Hash your input</Lead>
      </Flex>
      <Flex>
        <HashPasswordForm />
      </Flex>
    </PageWrapper>
  );
}

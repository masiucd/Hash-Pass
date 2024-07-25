import {Flex} from "@radix-ui/themes";

import {HashPasswordForm} from "../_components/hash-password-form";
import {PageWrapper} from "../_components/page-wrapper";
import {H1, Lead} from "../_components/typography";

export default function Home() {
  return (
    <PageWrapper className="border border-blue-500">
      <Flex direction="column" gap="2" my="2">
        <H1>Password Generator</H1>
        <Lead>Generate a strong password to keep your accounts secure</Lead>
      </Flex>
      <Flex>
        <HashPasswordForm />
      </Flex>
    </PageWrapper>
  );
}

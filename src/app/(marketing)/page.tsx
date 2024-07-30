import {Box, Flex} from "@radix-ui/themes";
import {compare} from "bcrypt";

import {HashPasswordForm} from "../_components/hash-password-form";
import {PageWrapper} from "../_components/page-wrapper";
import {H1, Lead} from "../_components/typography";
import {VerifyForm} from "../_components/verify-form";
import {sleep} from "../lib/sleep";

export async function verifyHash(prev: any, data: FormData) {
  "use server";
  let rawInput = data.get("raw-input");
  let hashedInput = data.get("hashed-input");
  if (typeof rawInput !== "string" || typeof hashedInput !== "string") {
    throw new Error("Missing data");
  }
  let ok = await compare(hashedInput, rawInput);
  if (ok) {
    return {
      ok,
      message: "There was a match",
    };
  }
  return {
    ok,
    message: "No match",
  };
}

export default async function Home() {
  await sleep(3000);
  return (
    <PageWrapper>
      <Flex direction="column" gap="2" my="3">
        <H1>Password Generator</H1>
        <Lead>Hash/verify your input</Lead>
      </Flex>
      <Flex justify="between">
        <Box width="550px" className="shadow">
          <HashPasswordForm />
        </Box>
        <Box width="550px" className="shadow">
          <VerifyForm action={verifyHash} />
        </Box>
      </Flex>
    </PageWrapper>
  );
}

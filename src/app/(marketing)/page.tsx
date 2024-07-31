import {Box, Flex} from "@radix-ui/themes";
import {compare} from "bcrypt";

import {HashPasswordForm} from "../_components/hash-password-form";
import {PageWrapper} from "../_components/page-wrapper";
import {H1, Lead} from "../_components/typography";
import {VerifyForm} from "../_components/verify-form";
import {sleep} from "../lib/sleep";

export async function verifyHash(
  prev: null | {
    ok: boolean;
    message: string;
  },
  data: FormData
) {
  "use server";
  let rawInput = data.get("raw-input");
  let hashedInput = data.get("hashed-input");
  if (typeof rawInput !== "string" || typeof hashedInput !== "string") {
    throw new Error("Missing data");
  }
  let ok = await compare(rawInput.trim(), hashedInput.trim());

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
  await sleep(1000);
  return (
    <PageWrapper>
      <Flex direction="column" gap="2" my="5">
        <H1>Hash / Verify Password</H1>
        <Lead>Hash a password and verify it using bcrypt.</Lead>
      </Flex>
      <div className="flex flex-col 2xl:flex-row 2xl:gap-10">
        <Box width="700px">
          <HashPasswordForm />
        </Box>
        <Box width="700px">
          <VerifyForm action={verifyHash} />
        </Box>
      </div>
    </PageWrapper>
  );
}

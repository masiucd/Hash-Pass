import {Flex} from "@radix-ui/themes";

import {PageWrapper} from "@/app/_components/page-wrapper";
import {H1, P} from "@/app/_components/typography";

let socials = Object.freeze([
  {
    name: "GitHub",
    url: "https://github.com/masiucd",
  },
  {
    name: "X",
    url: "https://x.com/masiu_cd",
  },
  {
    name: "Website",
    url: "https://marcellcs.com",
  },
]);

export default function AboutPage() {
  return (
    <PageWrapper>
      <H1>About Hash pass</H1>
      <Flex direction="column" gap="2" my="5">
        <P>
          Hash pass is a simple tool to hash and verify passwords using bcrypt.
        </P>
        <P>
          The main thought with this tool is to provide a simple way to hash and
          verify passwords using bcrypt.
        </P>
        <P>
          Nothing fancy but I did for me since I sometimes need to hash
          passwords and verify them, for example in my hobby projects where I
          quick want to get a password hashed and then insert it into a
          database.
        </P>
        <P>
          The verify is more for debugging and testing purposes, but it can be a
          good way to verify that the password you hashed is correct.
        </P>
      </Flex>
    </PageWrapper>
  );
}

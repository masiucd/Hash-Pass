import {Flex, Tooltip} from "@radix-ui/themes";
import type {Metadata} from "next";

import {Icons} from "@/app/_components/icons";
import {PageWrapper} from "@/app/_components/page-wrapper";
import {H1, P, Span} from "@/app/_components/typography";

export const metadata: Metadata = {
  title: "Hash Pass | About",
  description: "About Hash Pass",
};

let socials = Object.freeze([
  {
    name: "GitHub",
    url: "https://github.com/masiucd",
    icon: Icons.Github,
  },
  {
    name: "X",
    url: "https://x.com/masiu_cd",
    icon: Icons.X,
  },
  {
    name: "Website",
    url: "https://marcellcd.com",
    icon: Icons.Website,
  },
]);

export default function AboutPage() {
  return (
    <PageWrapper>
      <H1>
        About{" "}
        <Span className="relative after:absolute  after:bottom-2 after:left-0 after:h-3 after:w-full after:rotate-1 after:bg-gray-900/45 after:transition-transform after:content-['']   ">
          HashPass
        </Span>
      </H1>

      <Flex direction="column" gap="3" my="5" asChild>
        <aside className="w-full max-w-3xl">
          <P wrap="pretty">
            Hash pass is a simple tool to hash and verify passwords using
            bcrypt.
          </P>
          <P wrap="pretty">
            The main thought with this tool is to provide a simple way to hash
            and verify passwords using bcrypt.
          </P>
          <P wrap="pretty">
            Nothing fancy but I did for me since I sometimes need to hash
            passwords and verify them, for example in my hobby projects where I
            quick want to get a password hashed and then insert it into a
            database.
          </P>
          <P wrap="pretty">
            The verify is more for debugging and testing purposes, but it can be
            a good way to verify that the password you hashed is correct.
          </P>

          <Flex asChild gap="3">
            <ul>
              {socials.map((social) => (
                <Flex asChild key={social.name}>
                  <li>
                    <a
                      href={social.url}
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Tooltip content={social.name} side="top" align="center">
                        <social.icon size={26} />
                      </Tooltip>
                    </a>
                  </li>
                </Flex>
              ))}
            </ul>
          </Flex>
        </aside>
      </Flex>
    </PageWrapper>
  );
}

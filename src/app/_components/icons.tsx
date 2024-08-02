import {
  Copy,
  Info,
  Laptop,
  type LucideProps,
  Moon,
  PersonStanding,
  Sun,
} from "lucide-react";
import type {SVGProps} from "react";

const ICONS_SIZE = 18;
export let Icons = Object.freeze({
  Copy: (props: LucideProps) => <Copy size={ICONS_SIZE} {...props} />,
  User: (props: LucideProps) => <PersonStanding size={ICONS_SIZE} {...props} />,
  Info: (props: LucideProps) => <Info size={ICONS_SIZE} {...props} />,
  Website: (props: LucideProps) => <Laptop size={ICONS_SIZE} {...props} />,
  Github: (props: IconProps) => <GithubIcon {...props} />,
  X: (props: IconProps) => <XIcon {...props} />,
  Moon: (props: LucideProps) => <Moon size={ICONS_SIZE} {...props} />,
  Sun: (props: LucideProps) => <Sun size={ICONS_SIZE} {...props} />,
});

interface IconProps extends SVGProps<SVGSVGElement> {}
function GithubIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

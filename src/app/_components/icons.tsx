import {Copy, type LucideProps, PersonStanding} from "lucide-react";

const ICONS_SIZE = 16;
export let Icons = Object.freeze({
  Copy: (props: LucideProps) => <Copy size={ICONS_SIZE} {...props} />,
  User: (props: LucideProps) => <PersonStanding size={ICONS_SIZE} {...props} />,
});

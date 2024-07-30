import {TextField} from "@radix-ui/themes";
import type {RootProps} from "@radix-ui/themes/src/components/text-field.js";

export function Input(props: RootProps) {
  return <TextField.Root size="3" {...props} />;
}

import {Box, type BoxProps, TextField} from "@radix-ui/themes";
import type {RootProps} from "@radix-ui/themes/src/components/text-field.js";

import {Label} from "./typography";

export function Input(props: RootProps) {
  return <TextField.Root size="3" {...props} />;
}

{
  /* <Box>
<label htmlFor="raw-input">
  <Span>Raw Password</Span>
</label>
<Input
  type="text"
  placeholder="raw input value..."
  required
  name="raw-input"
/>
</Box> */
}

export function FormGroup(props: BoxProps) {
  return <Box {...props} />;
}
export function FormLabel(props: BoxProps) {
  return <Label weight="medium" {...props} />;
}

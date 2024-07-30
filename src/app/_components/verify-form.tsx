"use client";
import {Button} from "@radix-ui/themes";
import {useFormState} from "react-dom";

import {Input} from "./input";
import {Span} from "./typography";

export function VerifyForm({
  action,
}: {
  action(
    // eslint-disable-next-line no-unused-vars
    prev: any,
    // eslint-disable-next-line no-unused-vars
    data: FormData
  ): Promise<{
    ok: boolean;
    message: string;
  }>;
}) {
  let [state, formAction] = useFormState(action, null);
  console.log("state", state);
  return (
    <>
      <form action={formAction}>
        <Input
          type="text"
          placeholder="hashed input value..."
          required
          name="hashed-input"
        />
        <Input
          type="text"
          placeholder="raw input value..."
          required
          name="raw-input"
        />
        <Button type="submit" variant="classic">
          <Span weight="medium">Verify</Span>
        </Button>
      </form>
    </>
  );
}

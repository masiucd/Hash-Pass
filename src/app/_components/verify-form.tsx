"use client";
import {Button, Callout, Flex} from "@radix-ui/themes";
import {useRef} from "react";
import {useFormState} from "react-dom";

import {Icons} from "./icons";
import {FormGroup, FormLabel, Input} from "./input";
import {Span} from "./typography";

export function VerifyForm({
  action,
}: {
  action(
    // eslint-disable-next-line no-unused-vars
    prev: {
      ok: boolean;
      message: string;
    } | null,
    // eslint-disable-next-line no-unused-vars
    data: FormData
  ): Promise<{
    ok: boolean;
    message: string;
  }>;
}) {
  let [state, formAction] = useFormState(action, null);
  let ref = useRef<null | HTMLFormElement>(null);
  return (
    <Flex direction="column" gap="2">
      <Flex asChild direction="column" gap="3">
        <form
          action={async (data) => {
            formAction(data);
            if (ref.current) {
              ref.current.reset();
            }
          }}
          ref={ref}
        >
          <FormGroup>
            <label htmlFor="hashed-password">
              <FormLabel>Hashed Password</FormLabel>
            </label>
            <Input
              type="text"
              placeholder="hashed input value..."
              required
              name="hashed-input"
              id="hashed-password"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="raw-input">
              <FormLabel>Raw Password</FormLabel>
            </label>
            <Input
              type="text"
              placeholder="raw input value..."
              required
              name="raw-input"
            />
          </FormGroup>
          <Flex>
            <Button type="submit" variant="classic">
              <Span weight="medium">Verify</Span>
            </Button>
          </Flex>
        </form>
      </Flex>
      {state !== null && (
        <Callout.Root color={state.ok ? "green" : "red"}>
          <Callout.Icon>
            <Icons.Info />
          </Callout.Icon>
          <Callout.Text>
            <Span weight="bold">{state.message}</Span>
          </Callout.Text>
        </Callout.Root>
      )}
    </Flex>
  );
}

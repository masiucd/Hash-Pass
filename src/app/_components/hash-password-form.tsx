"use client";
import {Box, Button, Flex, Slider, TextField} from "@radix-ui/themes";
import {type PropsWithChildren} from "react";
import {useFormState} from "react-dom";
import toast, {Toaster} from "react-hot-toast";

import {hashUserInputPassword} from "../(marketing)/actions";
import {H2, Label} from "./typography";

const notify = () => toast("Here is your toast.");

export function HashPasswordForm() {
  let [state, formAction] = useFormState(hashUserInputPassword, null);
  return (
    <Box width="800px" className="border-2 border-red-400" p="3">
      <H2>Hash your password</H2>
      <form action={formAction}>
        <fieldset className="flex flex-col gap-2">
          <Flex direction="column" gap="2">
            <FormLabel>Password</FormLabel>
            <TextField.Root
              size="3"
              name="hashed-password"
              type="text"
              placeholder="Add the password"
              required
            />
          </Flex>

          <Flex direction="column" gap="2">
            <FormLabel>Salt</FormLabel>
            <Slider name="salt" defaultValue={[20]} />
          </Flex>
          <Button type="submit">Generate</Button>
        </fieldset>
      </form>
      {state && (
        <Flex direction="column" width="full">
          <H2>Hashed password</H2>
          <Flex
            gap="5"
            flexGrow="1"
            width="100%"
            className="border-2"
            // justify="between"
            align="center"
          >
            <TextField.Root
              size="3"
              value={state}
              readOnly
              className="w-full"
            />
            <Button
              variant="ghost"
              onClick={() => {
                if (typeof navigator.clipboard === "undefined") {
                  return;
                }
                notify();
                navigator.clipboard.writeText(state);
              }}
            >
              Copy
            </Button>
          </Flex>
        </Flex>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
}

function FormLabel({children}: PropsWithChildren) {
  return (
    <Label weight="medium" size="4">
      {children}
    </Label>
  );
}

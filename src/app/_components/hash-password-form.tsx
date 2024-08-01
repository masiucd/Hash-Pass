"use client";

import {
  Badge,
  Box,
  Button,
  DataList,
  Flex,
  IconButton,
  Slider,
} from "@radix-ui/themes";
import {useRef, useState} from "react";
import {useFormState} from "react-dom";

import {hashUserInputPassword} from "../(marketing)/actions";
import {Icons} from "./icons";
import {FormGroup, FormLabel, Input} from "./input";
import {notify, Toaster} from "./toaster";
import {Code, Span} from "./typography";

const SALT_DEFAULT = 8;

export function HashPasswordForm() {
  let [state, formAction] = useFormState(hashUserInputPassword, null);
  let [saltValue, setSaltValue] = useState([SALT_DEFAULT]);
  let ref = useRef<null | HTMLFormElement>(null);
  return (
    <>
      <form
        ref={ref}
        action={async (data) => {
          formAction(data);
          if (ref.current) {
            ref.current.reset();
          }
        }}
        className="flex  flex-col gap-4 px-2 py-1 "
      >
        <FormGroup>
          <label htmlFor="password">
            <FormLabel>Password</FormLabel>
          </label>
          <Input
            type="text"
            id="password"
            name="password"
            placeholder="input value..."
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="salt" className="flex flex-col gap-1">
            <FormLabel>Salt {saltValue} </FormLabel>
          </label>
          <Slider
            name="salt"
            id="salt"
            min={4}
            max={16}
            variant="soft"
            value={saltValue}
            onValueChange={(value) => {
              setSaltValue(value);
            }}
          />
        </FormGroup>
        <Flex mt="4">
          <Button type="submit">
            <Span weight="medium">Generate Hash</Span>
          </Button>
        </Flex>
      </form>
      {state !== null && (
        <Box className="mt-10 flex  animate-fade justify-between gap-1">
          <DataList.Root>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">
                <Span weight="bold">Status</Span>
              </DataList.Label>
              <DataList.Value>
                <Badge color="gray" variant="soft" radius="medium">
                  Success
                </Badge>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">
                <Span weight="bold">Hashed</Span>
              </DataList.Label>
              <DataList.Value>
                <Flex align="center" gap="2">
                  <Code variant="soft">{state.hashedPassword}</Code>
                  <CopyButton text={state.hashedPassword} />
                </Flex>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">
                <Span weight="bold">Input</Span>
              </DataList.Label>
              <DataList.Value>
                <Flex align="center" gap="2">
                  <Code variant="outline">{state.input}</Code>
                  <CopyButton text={state.input} />
                </Flex>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Box>
      )}
      <Toaster position="top-center" />
    </>
  );
}

function CopyButton({text}: {text: string}) {
  return (
    <IconButton
      size="1"
      aria-label="Copy value"
      color="gray"
      variant="ghost"
      onClick={() => {
        navigator.clipboard.writeText(text);
        notify("Copied to clipboard");
      }}
    >
      <Flex gap="1">
        <Icons.Copy /> Copy
      </Flex>
    </IconButton>
  );
}

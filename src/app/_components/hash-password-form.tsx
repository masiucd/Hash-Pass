"use client";

import {
  Badge,
  Button,
  DataList,
  Flex,
  IconButton,
  Slider,
} from "@radix-ui/themes";
import {useState} from "react";
import {useFormState} from "react-dom";

import {hashUserInputPassword} from "../(marketing)/actions";
import {Icons} from "./icons";
import {Input} from "./input";
import {notify, Toaster} from "./toaster";
import {Code, Label} from "./typography";

const SALT_DEFAULT = 8;

export function HashPasswordForm() {
  let [state, formAction] = useFormState(hashUserInputPassword, null);
  let [saltValue, setSaltValue] = useState([SALT_DEFAULT]);

  return (
    <div className="w-[550px]">
      <form action={formAction} className="flex  flex-col gap-4 px-2 py-1 ">
        <label htmlFor="password" className="flex flex-col gap-1">
          <Label>Password</Label>
          <Input
            type="text"
            id="password"
            name="password"
            placeholder="input value..."
            required
          />
        </label>
        <div className="flex flex-col">
          <label htmlFor="salt" className="flex flex-col gap-1">
            <Label>Salt {saltValue} </Label>
            <Slider
              // type="range"
              name="salt"
              id="salt"
              min={4}
              max={16}
              value={saltValue}
              onValueChange={(value) => {
                setSaltValue(value);
              }}
            />
          </label>
        </div>
        <Button type="submit">
          <span>Generate Hash</span>
        </Button>
      </form>
      {state !== null && (
        <div className="mt-10 flex  animate-fade justify-between gap-1 ">
          <DataList.Root>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Status</DataList.Label>
              <DataList.Value>
                <Badge color="jade" variant="soft" radius="full">
                  Success
                </Badge>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">ID</DataList.Label>
              <DataList.Value>
                <Flex align="center" gap="2">
                  <Code variant="ghost">{state}</Code>
                  <IconButton
                    size="1"
                    aria-label="Copy value"
                    color="gray"
                    variant="ghost"
                    onClick={() => {
                      navigator.clipboard.writeText(state);
                      notify("Copied to clipboard");
                    }}
                  >
                    <Flex gap="1">
                      <Icons.Copy /> Copy
                    </Flex>
                  </IconButton>
                </Flex>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Input</DataList.Label>
              <DataList.Value>Render base input TODO!</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </div>
      )}
      <Toaster position="top-center" />
    </div>
  );
}

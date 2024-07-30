"use client";

import {Button, Slider} from "@radix-ui/themes";
import {useState} from "react";
import {useFormState} from "react-dom";

import {hashUserInputPassword} from "../(marketing)/actions";
import {Input} from "./input";
import {notify, Toaster} from "./toaster";
import {Label} from "./typography";

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
          <Input type="text" readOnly value={state} className="w-full" />
          <Button
            type="button"
            variant="soft"
            size="3"
            onClick={() => {
              navigator.clipboard.writeText(state);
              notify("Copied to clipboard");
            }}
          >
            Copy
          </Button>
        </div>
      )}
      <Toaster position="bottom-right" />
    </div>
  );
}

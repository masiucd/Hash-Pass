"use client";

import {Button} from "@radix-ui/themes";
import {type PropsWithChildren, useState} from "react";
import {useFormState} from "react-dom";

import {hashUserInputPassword} from "../(marketing)/actions";
import {Input} from "./input";
import {notify, Toaster} from "./toaster";

const SALT_DEFAULT = 8;

export function HashPasswordForm() {
  let [state, formAction] = useFormState(hashUserInputPassword, null);
  let [saltValue, setSaltValue] = useState([SALT_DEFAULT]);

  return (
    <div className="w-full max-w-3xl">
      <form
        action={formAction}
        className="flex w-[400px] flex-col gap-2 border border-red-500 "
      >
        <label htmlFor="password" className="flex flex-col gap-1">
          <span>password</span>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="input value..."
            required
          />
        </label>
        <div className="flex flex-col">
          <label htmlFor="salt" className="flex flex-col gap-1">
            <span>Salt {saltValue} </span>
            <input
              type="range"
              name="salt"
              id="salt"
              min={4}
              max={16}
              defaultValue={saltValue[0]}
              onChange={(e) => {
                setSaltValue([Number(e.target.value)]);
              }}
            />
          </label>
        </div>
        <Button type="submit">
          <span>Generate Hash</span>
        </Button>
      </form>
      {state !== null && (
        <div className="mt-10 flex w-[500px] animate-fade justify-between gap-1 ">
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
      <Toaster />
    </div>
  );
}

"use client";
import {Flex, Switch} from "@radix-ui/themes";
import {useTheme} from "next-themes";

import {Icons} from "./icons";
import {Label, Span} from "./typography";

export function ThemeToggle() {
  let {theme, setTheme} = useTheme();

  return (
    <Label>
      <Flex align="center" gap="1">
        <Switch
          onCheckedChange={(checked) => {
            setTheme(checked ? "dark" : "light");
          }}
          value={theme}
          checked={theme === "dark"}
          defaultChecked
        />
        <Span className=" capitalize">
          {theme === "dark" ? (
            <Icons.Sun className="animate-fade-up" />
          ) : (
            <Icons.Moon className="animate-fade-down" />
          )}
        </Span>
      </Flex>
    </Label>
  );
}

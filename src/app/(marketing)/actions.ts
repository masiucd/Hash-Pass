"use server";

import "server-only";

import {genSalt, hash} from "bcrypt";

export async function hashUserInputPassword(
  prev: {
    hashedPassword: string;
    input: string;
  } | null,
  data: FormData
) {
  let input = data.get("password");
  let saltInput = data.get("salt");
  if (typeof input !== "string" || typeof saltInput !== "string") {
    throw new Error("Invalid input");
  }

  let salt = await genSalt(Number(saltInput));
  let hashedPassword = await hash(input, salt);
  return {hashedPassword, input};
}

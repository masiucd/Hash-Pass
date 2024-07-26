"use server";

import "server-only";

import {genSalt, hash} from "bcrypt";

export async function hashUserInputPassword(
  prev: string | null,
  data: FormData
) {
  let hashedPasswordInput = data.get("hashed-password");
  let saltInput = data.get("salt");

  if (
    typeof hashedPasswordInput !== "string" ||
    typeof saltInput !== "string"
  ) {
    throw new Error("Invalid input");
  }

  let salt = await genSalt(parseInt(saltInput, 10));
  let hashedPassword = await hash(hashedPasswordInput, salt);

  return hashedPassword;
}

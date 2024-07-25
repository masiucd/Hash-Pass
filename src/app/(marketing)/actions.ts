"use server";

import "server-only";

import {genSalt, hash} from "bcrypt";

export async function hashUserInputPassword(
  prev: string | null,
  data: FormData
) {
  let hashedPasswordInput = data.get("hashed-password");
  // let saltInput = data.get("salt");
  if (typeof hashedPasswordInput !== "string") {
    throw new Error("Invalid input");
  }
  let salt = await genSalt(10);
  let hashedPassword = await hash(hashedPasswordInput, salt);

  // let result = await compare(hashedPasswordInput, hashedPassword);

  return hashedPassword;
}

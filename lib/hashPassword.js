import { compare, hash } from "bcryptjs";

export const hashPassword = async (password) => {
  return await hash(password, 12);
};

export const verifyPassword = async (candidatePassword, hashPassword) => {
  const isValid = await compare(candidatePassword, hashPassword);
  return isValid;
};

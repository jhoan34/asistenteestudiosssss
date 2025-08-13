// /convex/functions/user/getusers.ts
import { mutation, query } from "../../_generated/server";
import { Doc, Id } from "../../_generated/dataModel";

type Userinputs = Omit<Doc<"users">, "_id" | "createdAt" | "updatedAt">;

export const getusers = query(async ({ db }) => {
  return await db.query("users").collect();
});

export const getuser = query(async ({ db }, { email }: { email: string }) => {
  const user = await db
    .query("users")
    .filter((q) => q.eq(q.field("email"), email))
    .first();
  return user;
});

export const createUser = mutation(
  async ({ db }, user: Omit<Doc<"users">, "_id" | "_creationTime">) => {
    return db.insert("users", user);
  }
);

export const updateUser = mutation(
  async ({ db }, { id, cambios }: { id: Id<"users">; cambios: Userinputs }) => {
    return db.patch(id, cambios);
  }
);

export const deleteUser = mutation(
  async ({ db }, { id }: { id: Id<"users"> }) => {
    return db.delete(id);
  }
);

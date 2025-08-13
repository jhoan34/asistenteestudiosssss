import { query } from "../../_generated/server";
import { mutation } from "../../_generated/server";

import { Doc, Id } from "../../_generated/dataModel";

type EstudioInput = Omit<Doc<"planestudios">, "_id">;

export const getEstudios = query(
  async ({ db }, { userId }: { userId: Id<"users"> }) => {
    return await db
      .query("planestudios")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  }
);

export const createEstudio = mutation(async ({ db }, E: EstudioInput) => {
  return await db.insert("planestudios", E);
});

export const updateEstudio = mutation(
  async (
    { db },
    {
      id,
      cambios,
    }: {
      id: Id<"planestudios">;
      cambios: EstudioInput;
    }
  ) => {
    return await db.patch(id, cambios);
  }
);

export const deleteEstudio = mutation(
  async ({ db }, { id }: { id: Id<"planestudios"> }) => {
    return await db.delete(id);
  }
);

import { query, mutation } from "../../_generated/server";
import { Id, Doc } from "../../_generated/dataModel";

export const createAsistConcepts = mutation(
  async (
    { db },
    { userId, createdAt, updatedAt }: Omit<Doc<"asistConcepts">, "_id">
  ) => {
    return db.insert("asistConcepts", {
      userId,
      createdAt,
      updatedAt,
    });
  }
);

export const getAsistConcepts = query(
  async ({ db }, { userId }: { userId: Id<"users"> }) => {
    return db
      .query("asistConcepts")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  }
);

export const deleteAsistConcepts = mutation(
  async (
    { db },
    { asistConceptsId }: { asistConceptsId: Id<"asistConcepts"> }
  ) => {
    return db.delete(asistConceptsId);
  }
);

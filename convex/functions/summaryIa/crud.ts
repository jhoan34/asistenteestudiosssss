import { query, mutation } from "../../_generated/server";
import { Id, Doc } from "../../_generated/dataModel";

export const createSummaryIa = mutation(
  async (
    { db },
    { userId, createdAt, updatedAt }: Omit<Doc<"summaryIa">, "_id">
  ) => {
    return db.insert("summaryIa", {
      userId,
      createdAt,
      updatedAt,
    });
  }
);

export const getSummaryIa = query(
  async ({ db }, { userId }: { userId: Id<"users"> }) => {
    return db
      .query("summaryIa")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  }
);

export const deleteSummaryIa = mutation(
  async ({ db }, { summaryId }: { summaryId: Id<"summaryIa"> }) => {
    return db.delete(summaryId);
  }
);

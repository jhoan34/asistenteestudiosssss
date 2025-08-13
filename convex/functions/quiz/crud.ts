import { query } from "../../_generated/server";
import { mutation } from "../../_generated/server";

import { Doc, Id } from "../../_generated/dataModel";

export const createQuiz = mutation(
  async (
    { db },
    { userId, question, answer, createdAt, updatedAt }: Omit<Doc<"quiz">, "_id">
  ) => {
    return db.insert("quiz", {
      userId,
      question,
      answer,
      createdAt,
      updatedAt,
    });
  }
);

export const getQuiz = query(
  async ({ db }, { userId }: { userId: Id<"users"> }) => {
    return db
      .query("quiz")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  }
);

export const deleteQuiz = mutation(
  async ({ db }, { quizId }: { quizId: Id<"quiz"> }) => {
    return db.delete(quizId);
  }
);

export const updateQuiz = mutation(async ({ db }, d: Doc<"quiz">) => {
  return db.patch(d._id, d);
});

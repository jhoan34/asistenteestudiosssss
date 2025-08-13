import { query, mutation } from "../../_generated/server";
import { Id, Doc } from "../../_generated/dataModel";

export const createFlashcard = mutation(
  async (
    { db },
    {
      userId,
      front,
      back,
      createdAt,
      updatedAt,
    }: Omit<Doc<"flashcards">, "_id">
  ) => {
    return db.insert("flashcards", {
      userId,
      front,
      back,
      createdAt,
      updatedAt,
    });
  }
);

export const getFlashCards = query(
  async ({ db }, { userId }: { userId: Id<"users"> }) => {
    return db
      .query("flashcards")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  }
);

export const deleteFlashcard = mutation(
  async ({ db }, { flashcardId }: { flashcardId: Id<"flashcards"> }) => {
    return db.delete(flashcardId);
  }
);

export const updateFlashcard = mutation(
  async ({ db }, d: Doc<"flashcards">) => {
    return db.patch(d._id, d);
  }
);

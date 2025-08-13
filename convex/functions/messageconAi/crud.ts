import { query, mutation } from "../../_generated/server";
import { Id, Doc } from "../../_generated/dataModel";

export const createMessageWithAiConcepts = mutation(
  async (
    { db },
    {
      chatId,
      sender,
      content,
      createdAt,
      updatedAt,
    }: Omit<Doc<"meesageConAI">, "_id">
  ) => {
    return db.insert("meesageConAI", {
      chatId,
      sender,
      content,
      createdAt,
      updatedAt,
    });
  }
);

export const getMessageWithAiConcepts = query(
  async ({ db }, { chatId }: { chatId: Id<"meesageConAI"> }) => {
    return db
      .query("meesageConAI")
      .filter((q) =>
        q.eq(q.field("chatId"), chatId as unknown as Id<"asistConcepts">)
      )
      .collect();
  }
);

export const deleteMessageWithAiConcepts = mutation(
  async ({ db }, { messageId }: { messageId: Id<"meesageConAI"> }) => {
    return db.delete(messageId);
  }
);

export const updateMessageWithAiConcepts = mutation(
  async ({ db }, d: Doc<"meesageConAI">) => {
    return db.patch(d._id, d);
  }
);

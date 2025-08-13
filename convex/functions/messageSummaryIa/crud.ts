import { query, mutation } from "../../_generated/server";
import { Id, Doc } from "../../_generated/dataModel";

export const createMessageSummaryIa = mutation(
  async (
    { db },
    {
      chatId,
      sender,
      content,
      createdAt,
      updatedAt,
    }: Omit<Doc<"messageSummayIa">, "_id">
  ) => {
    return db.insert("messageSummayIa", {
      chatId,
      sender,
      content,
      createdAt,
      updatedAt,
    });
  }
);

export const getMessageSummaryIa = query(
  async ({ db }, { chatId }: { chatId: Id<"messageSummayIa"> }) => {
    return db
      .query("messageSummayIa")
      .filter((q) => q.eq(q.field("chatId"), chatId as string))
      .collect();
  }
);

export const deleteMessageSummaryIa = mutation(
  async ({ db }, { messageId }: { messageId: Id<"messageSummayIa"> }) => {
    return db.delete(messageId);
  }
);

import { query } from "../../_generated/server";
import { mutation } from "../../_generated/server";

import { Doc, Id } from "../../_generated/dataModel";

type ChatProps = Omit<Doc<"messages">, "_id">;

export const createMessageChatSession = mutation(
  async (
    { db },
    { chatid, sender, content, createdAt, updatedAt }: ChatProps
  ) => {
    return db.insert("messages", {
      chatid,
      sender,
      content,
      createdAt,
      updatedAt,
    });
  }
);

export const getMessageChatSession = query(
  async ({ db }, { chatid }: { chatid: Id<"planChatSessions"> }) => {
    return db
      .query("messages")
      .filter((q) => q.eq(q.field("chatid"), chatid))
      .collect();
  }
);

export const deleteMessageChatSession = mutation(
  async ({ db }, { messageId }: { messageId: Id<"messages"> }) => {
    return db.delete(messageId);
  }
);

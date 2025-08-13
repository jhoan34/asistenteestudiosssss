import { query } from "../../_generated/server";
import { mutation } from "../../_generated/server";
import { Id } from "../../_generated/dataModel";

import { Doc } from "../../_generated/dataModel";

type PlanChat = Omit<Doc<"planChatSessions">, "_id">;

export const createChatSession = mutation(
  async ({ db }, { userId, createdAt, updatedAt }: PlanChat) => {
    return db.insert("planChatSessions", { userId, createdAt, updatedAt });
  }
);

export const getchatUsession = query(
  async ({ db }, { userId }: { userId: Id<"users"> }) => {
    return db
      .query("planChatSessions")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  }
);

export const deleteChatSession = mutation(
  async ({ db }, { chatId }: { chatId: Id<"planChatSessions"> }) => {
    return db.delete(chatId);
  }
);

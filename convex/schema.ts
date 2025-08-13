import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.string(),
    password: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
    isadmin: v.optional(v.boolean()),
  }),

  planestudios: defineTable({
    userId: v.id("users"),
    lunes: v.string(),
    martes: v.string(),
    miercoles: v.string(),
    jueves: v.string(),
    viernes: v.string(),
    sabado: v.string(),
    domingo: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  planChatSessions: defineTable({
    // 🔄 renombrado (opcional)
    userId: v.id("users"),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  messages: defineTable({
    chatid: v.id("planChatSessions"),
    sender: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  quiz: defineTable({
    userId: v.id("users"),
    question: v.string(),
    answer: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  flashcards: defineTable({
    userId: v.id("users"),
    front: v.string(),
    back: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  asistConcepts: defineTable({
    userId: v.id("users"),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),
  meesageConAI: defineTable({
    chatId: v.id("asistConcepts"),
    sender: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  summaryIa: defineTable({
    userId: v.id("users"),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  messageSummayIa: defineTable({
    chatId: v.id("summaryIa"),
    sender: v.union(v.literal("user"), v.literal("assistant")),
    content: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  contacto: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),
});

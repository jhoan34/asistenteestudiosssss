import { mutation, query } from "../../_generated/server";

import { Doc, Id } from "../../_generated/dataModel";

export const getContactos = query(
  async ({ db }): Promise<Doc<"contacto">[]> => {
    const contacts = await db.query("contacto").collect();
    if (contacts.length === 0) {
      throw new Error("No contacts found");
    }
    return contacts;
  }
);

export const createContactos = mutation(
  async (
    { db },
    args: Omit<Doc<"contacto">, "_id" | "_creationTime"> // ✅ Sin el espacio
  ): Promise<Id<"contacto">> => {
    const contact = await db.insert("contacto", args);
    return contact;
  }
);

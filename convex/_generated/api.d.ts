/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as functions_asistConcepts_crud from "../functions/asistConcepts/crud.js";
import type * as functions_contacto_crud from "../functions/contacto/crud.js";
import type * as functions_flashcards_crud from "../functions/flashcards/crud.js";
import type * as functions_messageSummaryIa_crud from "../functions/messageSummaryIa/crud.js";
import type * as functions_messageconAi_crud from "../functions/messageconAi/crud.js";
import type * as functions_messagesChatSession_crud from "../functions/messagesChatSession/crud.js";
import type * as functions_planchatsessions_crud from "../functions/planchatsessions/crud.js";
import type * as functions_planestudios_crud from "../functions/planestudios/crud.js";
import type * as functions_quiz_crud from "../functions/quiz/crud.js";
import type * as functions_summaryIa_crud from "../functions/summaryIa/crud.js";
import type * as functions_user_crud from "../functions/user/crud.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "functions/asistConcepts/crud": typeof functions_asistConcepts_crud;
  "functions/contacto/crud": typeof functions_contacto_crud;
  "functions/flashcards/crud": typeof functions_flashcards_crud;
  "functions/messageSummaryIa/crud": typeof functions_messageSummaryIa_crud;
  "functions/messageconAi/crud": typeof functions_messageconAi_crud;
  "functions/messagesChatSession/crud": typeof functions_messagesChatSession_crud;
  "functions/planchatsessions/crud": typeof functions_planchatsessions_crud;
  "functions/planestudios/crud": typeof functions_planestudios_crud;
  "functions/quiz/crud": typeof functions_quiz_crud;
  "functions/summaryIa/crud": typeof functions_summaryIa_crud;
  "functions/user/crud": typeof functions_user_crud;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

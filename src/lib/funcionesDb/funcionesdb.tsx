"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

export const useCreateUser = () => {
  return useMutation(api.functions.user.crud.createUser);
};
export const useGetUser = (emaildas: string) => {
  return useQuery(api.functions.user.crud.getuser, {
    email: emaildas,
  });
};

export const useGetUsers = () => {
  return useQuery(api.functions.user.crud.getusers);
};

export const useUpdateUser = () => {
  return useMutation(api.functions.user.crud.updateUser);
};

export const useDeleteUser = () => {
  return useMutation(api.functions.user.crud.deleteUser);
};

// tabla planesestudios
export const useCreatePlanesEstudio = () => {
  return useMutation(api.functions.planestudios.crud.createEstudio);
};

export const useGetEstudios = (userID: Id<"users">) => {
  return useQuery(api.functions.planestudios.crud.getEstudios, {
    userId: userID,
  });
};

export const useUpdateEstudio = () => {
  return useMutation(api.functions.planestudios.crud.updateEstudio);
};

export const useDeleteEstudio = () => {
  return useMutation(api.functions.planestudios.crud.deleteEstudio);
};

// tabla planChatSessions
export const useCreatePlanChatSessions = () => {
  return useMutation(api.functions.planchatsessions.crud.createChatSession);
};

export const useGetPlanChatSessions = (userID: Id<"users">) => {
  return useQuery(api.functions.planchatsessions.crud.getchatUsession, {
    userId: userID,
  });
};

export const useDeletePlanChatSessions = () => {
  return useMutation(api.functions.planchatsessions.crud.deleteChatSession);
};

// tabla planChatMessages
export const useCreatePlanChatMessages = () => {
  return useMutation(
    api.functions.messagesChatSession.crud.createMessageChatSession
  );
};

export const useGetPlanChatMessages = (
  chatSessionID: Id<"planChatSessions">
) => {
  return useQuery(
    api.functions.messagesChatSession.crud.getMessageChatSession,
    {
      chatid: chatSessionID,
    }
  );
};

export const useDeletePlanChatMessages = () => {
  return useMutation(
    api.functions.messagesChatSession.crud.deleteMessageChatSession
  );
};

//quiz

export const useCreateQuizes = () => {
  return useMutation(api.functions.quiz.crud.createQuiz);
};

export const useGetQuizes = (userID: Id<"users">) => {
  return useQuery(api.functions.quiz.crud.getQuiz, {
    userId: userID,
  });
};

export const useDeleteQuizes = () => {
  return useMutation(api.functions.quiz.crud.deleteQuiz);
};

export const useUpdateQuizes = () => {
  return useMutation(api.functions.quiz.crud.updateQuiz);
};

// tabla flashcards

export const useCreateFlashcards = () => {
  return useMutation(api.functions.flashcards.crud.createFlashcard);
};

export const useGetFlashcards = (userID: Id<"users">) => {
  return useQuery(api.functions.flashcards.crud.getFlashCards, {
    userId: userID,
  });
};

export const useDeleteFlashcards = () => {
  return useMutation(api.functions.flashcards.crud.deleteFlashcard);
};

export const useUpdateFlashcards = () => {
  return useMutation(api.functions.flashcards.crud.updateFlashcard);
};

// asisconcepts

export const useCreateAsistConcepts = () => {
  return useMutation(api.functions.asistConcepts.crud.createAsistConcepts);
};

export const useGetAsistConcepts = (userID: Id<"users">) => {
  return useQuery(api.functions.asistConcepts.crud.getAsistConcepts, {
    userId: userID,
  });
};

export const useDeleteAsistConcepts = () => {
  return useMutation(api.functions.asistConcepts.crud.deleteAsistConcepts);
};

/// asisconceptsmessages

export const useCreateAsistConceptsMessages = () => {
  return useMutation(
    api.functions.messageconAi.crud.createMessageWithAiConcepts
  );
};

export const useGetAsistConceptsMessages = (chatid: Id<"meesageConAI">) => {
  return useQuery(api.functions.messageconAi.crud.getMessageWithAiConcepts, {
    chatId: chatid as unknown as Id<"meesageConAI">,
  });
};

export const useDeleteAsistConceptsMessages = () => {
  return useMutation(
    api.functions.messageconAi.crud.deleteMessageWithAiConcepts
  );
};

export const useUpdateAsistConceptsMessages = () => {
  return useMutation(
    api.functions.messageconAi.crud.updateMessageWithAiConcepts
  );
};

// sumarry ia chat

export const useCreateSummaryChat = () => {
  return useMutation(api.functions.summaryIa.crud.createSummaryIa);
};

export const useGetSummaryIa = (userId: Id<"users">) => {
  return useQuery(api.functions.summaryIa.crud.getSummaryIa, {
    userId: userId,
  });
};

export const useDeleteSummaryIa = () => {
  return useMutation(api.functions.summaryIa.crud.deleteSummaryIa);
};

/// message Id chat summary

export const useGetMessageIdChatSummary = (userId: Id<"messageSummayIa">) => {
  return useQuery(api.functions.messageSummaryIa.crud.getMessageSummaryIa, {
    chatId: userId,
  });
};

export const useDeleteMessageIdChatSummary = () => {
  return useMutation(
    api.functions.messageSummaryIa.crud.deleteMessageSummaryIa
  );
};

export const useCreateMessageIdChatSummary = () => {
  return useMutation(
    api.functions.messageSummaryIa.crud.createMessageSummaryIa
  );
};

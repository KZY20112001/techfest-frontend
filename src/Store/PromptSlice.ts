import { StateCreator } from "zustand";

export interface PromptSlice {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

const createPromptSlice: StateCreator<PromptSlice, [], [], PromptSlice> = (
  set
) => ({
  prompt: "cpf",
  setPrompt: (prompt: string) => {
    set({ prompt: prompt });
  },
});

export default createPromptSlice;

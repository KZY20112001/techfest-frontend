import { create } from "zustand";
import createPromptSlice, { PromptSlice } from "./PromptSlice";

const useStore = create<PromptSlice>()((...a) => ({
  ...createPromptSlice(...a),
}));

export default useStore;

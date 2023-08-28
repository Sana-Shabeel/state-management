import { create } from "zustand";

const store = (set) => ({
  task: [
    { title: "Task 1", state: "PLANNED" },
    { title: "Task 2", state: "PLANNED" },
    { title: "Task 3", state: "DONE" },
  ],
});

export const useStore = create(store);

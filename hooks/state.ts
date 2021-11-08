import create from "zustand";
import { persist } from "zustand/middleware";

let store: any = (set: any) => ({
  dark: false,
  toggleTheme: () => set((state: any) => ({ dark: !state.dark })),
});

// store = devtools(store);
store = persist(store, { name: "user_settings" });

export const useStore = create(store);

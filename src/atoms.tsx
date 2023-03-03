import { atom, selector } from "recoil";

export const toDoState = atom({
  key: "todo",
  default: {
    to_do: [],
    doing: [],
    done: [],
  },
});

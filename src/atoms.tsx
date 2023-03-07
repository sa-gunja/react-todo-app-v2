import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}
interface ItoDoState {
  [key: string]: IToDo[];
}

export const toDoState = atom<ItoDoState>({
  key: "todo",
  default: {
    "TO DO": [],
    DOING: [],
    DONE: [],
  },
});

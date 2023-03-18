import { nanoid } from "nanoid";

const initialTodo = [
  {
    id: nanoid(),
    done: true,
    todo: "Complete online JavaScript course",
  },
  {
    id: nanoid(),
    done: false,
    todo: "Jog around the park 3x",
  },
  {
    id: nanoid(),
    done: false,
    todo: "10 minutes meditation",
  },
  {
    id: nanoid(),
    done: false,
    todo: "Read for 1 hour",
  },
  {
    id: nanoid(),
    done: false,
    todo: "Pick up groceries",
  },
  {
    id: nanoid(),
    done: false,
    todo: "Complete Todo App on Frontend Mentor",
  },
];

export default initialTodo;

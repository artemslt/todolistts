import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
  text: string;
  completed: boolean;
}

const tasksInitialState: Item[] = [
  { id: '0', text: 'Learn HTML and CSS', completed: true },
  { id: '1', text: 'Get good at JavaScript', completed: true },
  { id: '2', text: 'Master React', completed: false },
  { id: '3', text: 'Discover Redux', completed: false },
  { id: '4', text: 'Build amazing apps', completed: false }
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state: Item[], action: PayloadAction<Item>) {
        state.push(action.payload);
      },
      prepare: (text: string) => {
        const id = nanoid();
        return {
          payload: {
            id,
            text,
            completed: false
          }
        };
      }
    },

    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    updateTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].text = action.payload.text;
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
    deleteAllTasks(state) {
      state.length = 0;
    },
    deleteDoneTasks(state) {
      return state.filter((task) => task.completed === false);
    }
  }
});

export const { addTask, deleteTask, toggleCompleted, deleteAllTasks, deleteDoneTasks, updateTask } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

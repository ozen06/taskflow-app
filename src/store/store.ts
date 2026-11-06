import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../components/TaskCreate';
import { useDispatch } from 'react-redux';

const initialState = {
    taskList: [] as Task[]
};
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state: any, action: PayloadAction<Task>) => {
            state.taskList.push(action.payload)
        },
        deleteTask: (state: any, action: PayloadAction<number>) => {
            // action.payload recibe la Id de la tarea
            state.taskList = state.taskList.filter((t: any) => t.id !== action.payload);
        },
        toggleTaskDescription: (state: any, action: PayloadAction<number>) => {
            // action.payload recibe la Id de la tarea
            const task = state.taskList.find((t: any) => t.id === action.payload);
            if (task) {
                task.active = !task.active;
            }
        },
        toggleTaskCompleted: (state: any, action: PayloadAction<number>) => {
            // action.payload recibe la Id de la tarea
            const task = state.taskList.find((t: any) => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        setColorCategory: (state: any, action: PayloadAction<string[]>) => {
            const colors = action.payload;
            state.taskList.forEach((task: any, index: any) => {
                task.colorCategory = colors[index % colors.length];
            });
        }
    },
});

export const { addTask, toggleTaskDescription, toggleTaskCompleted, deleteTask, setColorCategory } = tasksSlice.actions;

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
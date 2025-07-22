import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoslice';
import { todoSlice } from '../features/todo/todoslice';

export const store = configureStore({
    reducer: {
        todo: todoReducer
    } 
});


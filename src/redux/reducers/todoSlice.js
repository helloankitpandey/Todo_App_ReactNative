import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        data:[]
    },
    reducers:{ // it provide global state managment
        // we use fn from here to addtodo.js file
        addTodo: (state, action) => {
            const todoData = {
                id: state.data?.length + 1,
                title: action.payload.title,
                desc: action.payload.desc,
            };

            state.data = [todoData, ...state?.data];
        },
        // for deleting todos
        deleteTodo: (state, action) => {
            state.data = state.data.filter( (i) => i?.id !== action.payload.id);
        },
        // for updating todos
        updateTodo: (state, action) => {
            const { id, title, desc } = action.payload;
            const index = state.data?.findIndex( (i) => i.id === id);

            if(index != -1){
                state.data[index] = { ...state.data[index], title, desc };
            }
        }
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
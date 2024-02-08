import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    id: null,
    status: null,
    basket: [],
    history: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.status = action.payload.status;
            state.basket = action.payload.basket;
            state.history = action.payload.history;
        },
        removeUser(state) {
            state.name = null;
            state.email = null;
            state.id = null;
            state.status = null;
            state.basket = [];
            state.history = [];
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
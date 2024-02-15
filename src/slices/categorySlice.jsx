import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCategory: "Все"
}


const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload;

        }
    }
})

export const { setActiveCategory } = categorySlice.actions;
export default categorySlice.reducer;

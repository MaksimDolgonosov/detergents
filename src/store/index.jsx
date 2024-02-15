import { configureStore } from "@reduxjs/toolkit";
import user from "../slices/userSlice";
import category from "../slices/categorySlice";
import { userApiSlice } from "../query/userApiSlice";
import { goodsApiSlice } from "../query/goodsApiSlice";
import { categoriesApiSlice } from "../query/categoriesApiSlice";
// export const store = configureStore({
//     reducer: 
// })

const store = configureStore({
    reducer: {
        user,
        category,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        [goodsApiSlice.reducerPath]: goodsApiSlice.reducer,
        [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApiSlice.middleware, goodsApiSlice.middleware, categoriesApiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",

})
export default store;
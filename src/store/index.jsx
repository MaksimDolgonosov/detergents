import { configureStore } from "@reduxjs/toolkit";
import user from "../slices/userSlice";
import { userApiSlice } from "../query/userApiSlice";
import { goodsApiSlice } from "../query/goodsApiSlice";
// export const store = configureStore({
//     reducer: 
// })

const store = configureStore({
    reducer: {
        user,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        [goodsApiSlice.reducerPath]: goodsApiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApiSlice.middleware, goodsApiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",

})
export default store;
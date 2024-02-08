import { configureStore } from "@reduxjs/toolkit";
import user from "../slices/userSlice";
import { userApiSlice } from "../query/userApiSlice";
// export const store = configureStore({
//     reducer: 
// })

const store = configureStore({
    reducer: {user,[userApiSlice.reducerPath]: userApiSlice.reducer,},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat( userApiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",

})
export default store;
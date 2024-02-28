import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import user from "../slices/userSlice";
import category from "../slices/categorySlice";
import { userApiSlice } from "../query/userApiSlice";
import { goodsApiSlice } from "../query/goodsApiSlice";
import { categoriesApiSlice } from "../query/categoriesApiSlice";
// export const store = configureStore({
//     reducer: 
// })
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
    user,
    category,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [goodsApiSlice.reducerPath]: goodsApiSlice.reducer,
    [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
})

const persistConfig = {
    key: 'auth',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)


const store = configureStore({
    reducer: persistedReducer,
    // reducer: {
    //     user,
    //     category,
    //     [userApiSlice.reducerPath]: userApiSlice.reducer,
    //     [goodsApiSlice.reducerPath]: goodsApiSlice.reducer,
    //     [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
    // },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(userApiSlice.middleware, goodsApiSlice.middleware, categoriesApiSlice.middleware),
    devTools: process.env.NODE_ENV !== "production",

})
export const persistor = persistStore(store)
export default store;
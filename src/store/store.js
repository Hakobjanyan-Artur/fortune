import { configureStore } from "@reduxjs/toolkit"
import { usersReducers } from "./slices/users"


const store = configureStore({
    reducer: {
        users: usersReducers
    }
})

export default store
import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
    name: 'users',
    initialState: {
        users: [],
        currentUser: null
    },
    reducers: {

    }
})

export const selectUsers = state => state.users

export const { } = userSlices.actions

export const usersReducers = userSlices.reducer
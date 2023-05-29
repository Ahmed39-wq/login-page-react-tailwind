import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeUserData: (state, { payload }) => {
            state.data.push(payload)
        }
    }
})

export const { storeUserData } = userSlice.actions
export default userSlice.reducer
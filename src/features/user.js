import { createSlice } from "@reduxjs/toolkit";

const defaultValueUser = { name: "Hi", age: 0, email: ""}

const userSlice = createSlice({
  name: 'user',
  initialState: { value: defaultValueUser},
  reducers: {
    login: (state, action) => {
        state.value = action.payload
    },
    logout: (state) => {
        state.value = defaultValueUser
    },

  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer

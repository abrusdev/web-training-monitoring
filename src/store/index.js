import { configureStore, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./thunks/loginUser";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: {
      id: localStorage.getItem('secret')
    },
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false
    });
    builder.addCase(loginUser.rejected, (state, action) => {

    });
  }
})

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

export { store };
export * from './thunks/loginUser';
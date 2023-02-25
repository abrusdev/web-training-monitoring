import { configureStore, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./thunks/loginUser";
import { getUser } from "./thunks/getUser";
import { addWorkout } from "./thunks/addWorkout";

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
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    });

    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false
    });
  }
})

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    isLoading: false,
    data: {},
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addWorkout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addWorkout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(addWorkout.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload
    });
  }
})

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    workouts: workoutsSlice.reducer,
  }
})

export { store };
export * from './thunks/loginUser';
export * from './thunks/getUser';
export * from './thunks/addWorkout';

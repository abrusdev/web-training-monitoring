import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from "../utils";

const addWorkout = createAsyncThunk("workouts/add", async () => {

  await POST("workouts", {
    end_time: "1677336492",
    goal: "2",
    metrics: "m",
    type: "ic_walk",
    value: "1",
  })

  return {
    code: 204
  }
})

export { addWorkout };
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils";

const addTraining = createAsyncThunk("workout/add", async () => {
  await addDoc(collection(db, 'workouts'), {
    duration: 1,
    end_time: 1677336492,
    goal: 2,
    metrics: 'm',
    type: 'ic_walk',
    value: '1000',
  })

  return {
    code: 204
  }
})

export { addTraining };
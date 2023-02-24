import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPath } from "../utils";

const loginUser = createAsyncThunk('user/login', async (args, { rejectWithValue }) => {
  const data = await getPath("users");

  let userId = null;

  data.forEach((doc) => {
    const info = doc.data();
    if (info.login === args.login && info.password === args.password) {
      userId = doc.id;
      localStorage.setItem("secret", userId)
    }
  })

  if (userId)
    return { id: userId };
  else
    return rejectWithValue('Credentials not found')
});

export { loginUser };
import { createAsyncThunk } from "@reduxjs/toolkit";
import { decrypt, GET } from "../utils";

const loginUser = createAsyncThunk('user/login', async (args, { rejectWithValue }) => {
  const data = await GET("users");

  let response = {}

  data.forEach((doc) => {
    const info = doc.data();

    if (info.login === args.login && decrypt(info.password) === args.password) {
      response = {
        id: doc.id,
        name: info.name
      }

      localStorage.setItem("secret", doc.id)
    }
  })

  if (response.id)
    return response;
  else
    return rejectWithValue('Credentials not found')
});

export { loginUser };
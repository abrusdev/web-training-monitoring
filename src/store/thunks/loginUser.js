import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPath } from "../utils";

const loginUser = createAsyncThunk('user/login', async (args) => {
  const data = await getPath("users");

  let userId = null;

  data.forEach((doc) => {
    const info = doc.data();
    if (info.login === args.login && info.password === args.password) {
      userId = doc.id;
      localStorage.setItem("secret", userId)
    }
  })

  return { id: userId };
});

export { loginUser };
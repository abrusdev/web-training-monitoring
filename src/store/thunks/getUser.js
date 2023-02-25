import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET } from "../utils";

const getUser = createAsyncThunk("user/get", async () => {
  const data = await GET("users");
  const id = localStorage.getItem('secret');

  const userResponse = data.filter((item) => item.id === id)[0]

  return {
    id: id,
    name: userResponse.data().name
  }
})

export { getUser };
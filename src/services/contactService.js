import API from "./api";

export const sendMessage = async (data) => {
  const res = await API.post("/contact", data);
  return res.data;
};
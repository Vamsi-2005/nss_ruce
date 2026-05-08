import API from "./api";

export const getDonors = async () => {
  const res = await API.get("/donors");
  return res.data;
};

export const addDonor = async (data) => {
  const res = await API.post("/donors", data);
  return res.data;
};
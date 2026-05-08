import API from "./api";

export const getGallery = async () => {
  const res = await API.get("/gallery");
  return res.data;
};

export const uploadImage = async (formData) => {
  const res = await API.post("/gallery", formData);
  return res.data;
};
import API from "./api";

export const getStudents = async () => {
  const res = await API.get("/students");
  return res.data;
};

export const addStudent = async (data) => {
  const res = await API.post("/students", data);
  return res.data;
};

export const updateStudent = async (id, data) => {
  const res = await API.put(`/students/${id}`, data);
  return res.data;
};

export const deleteStudent = async (id) => {
  const res = await API.delete(`/students/${id}`);
  return res.data;
};
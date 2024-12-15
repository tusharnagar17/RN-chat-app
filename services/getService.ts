import api from "./api";

export const getMessage = async (chatNumber: number) => {
  const response = await api.get(`/chat?page=${chatNumber}`);
  console.log("Response DATA", response.data);
  return response.data;
};

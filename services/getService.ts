import api from "./api";

export const getMessage = async (chatNumber: number) => {
  const response = await api.get(`/chat?page=${chatNumber}`);
  return response.data;
};

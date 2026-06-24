const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const handleResponse = async (res) => {
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Something went wrong");
  }
  return res.json();
};

export const shortenUrl = async (url) => {
  const res = await fetch(`${BASE_URL}/shorten`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  return handleResponse(res);
};

export const getStats = async (code) => {
  const res = await fetch(`${BASE_URL}/stats/${code}`);
  return res.json();
};

export const getAllLinks = async () => {
  const res = await fetch(`${BASE_URL}/links`);
  return handleResponse(res);
};

export const deleteLink = async (id) => {
  const res = await fetch(`${BASE_URL}/links/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
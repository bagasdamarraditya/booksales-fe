import API from "../_api";

// Ambil semua genre (READ)
export const getGenres = async () => {
  try {
    const { data } = await API.get("/genres");
    return data.data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};

// Tambah genre baru (CREATE)
export const createGenre = async (data) => {
  try {
    const response = await API.post("/genres", data);
    return response.data;
  } catch (error) {
    console.error("Error creating genre:", error);
    throw error;
  }
};

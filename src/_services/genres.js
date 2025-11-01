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

// Ambil 1 genre berdasarkan ID (READ by ID)
export const getGenreById = async (id) => {
  try {
    const { data } = await API.get(`/genres/${id}`);
    return data.data;
  } catch (error) {
    console.error(`Error fetching genre with ID ${id}:`, error);
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

// Update data genre (UPDATE)
export const updateGenre = async (id, data) => {
  try {
    const response = await API.put(`/genres/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating genre with ID ${id}:`, error);
    throw error;
  }
};

// Hapus genre (DELETE)
export const deleteGenre = async (id) => {
  try {
    const response = await API.delete(`/genres/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting genre with ID ${id}:`, error);
    throw error;
  }
};

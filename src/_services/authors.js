import API from "../_api";

// Ambil semua author (READ)
export const getAuthors = async () => {
  try {
    const { data } = await API.get("/authors");
    return data.data;
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw error;
  }
};

// Ambil 1 author berdasarkan ID (READ by ID)
export const getAuthorById = async (id) => {
  try {
    const { data } = await API.get(`/authors/${id}`);
    return data.data;
  } catch (error) {
    console.error(`Error fetching author with ID ${id}:`, error);
    throw error;
  }
};

// Tambah author baru (CREATE)
export const createAuthor = async (data) => {
  try {
    const response = await API.post("/authors", data);
    return response.data;
  } catch (error) {
    console.error("Error creating author:", error);
    throw error;
  }
};

// Update data author (UPDATE)
export const updateAuthor = async (id, data) => {
  try {
    const response = await API.put(`/authors/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating author with ID ${id}:`, error);
    throw error;
  }
};

// Hapus author (DELETE)
export const deleteAuthor = async (id) => {
  try {
    const response = await API.delete(`/authors/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting author with ID ${id}:`, error);
    throw error;
  }
};

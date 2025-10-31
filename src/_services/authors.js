import API from "../_api/index.js";


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

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthorById, updateAuthor } from "../../../../_services/authors";

export default function AuthorEdit() {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    bio: "",
  });

  // Ambil data author berdasarkan ID
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const data = await getAuthorById(id);
        setFormData({
          name: data.name || "",
          photo: data.photo || "",
          bio: data.bio || "",
        });
      } catch (error) {
        console.error("Gagal mengambil data author:", error);
      }
    };
    fetchAuthor();
  }, [id]);

  // Menangani perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Menangani submit untuk update data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAuthor(id, formData);
      alert("Data author berhasil diperbarui!");
      navigate("/admin/authors");
    } catch (error) {
      console.error("Gagal memperbarui author:", error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit Author
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            {/* Nama */}
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Author
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Masukkan nama author"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            {/* URL Foto */}
            <div className="sm:col-span-2">
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                URL Foto
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Masukkan URL foto"
                value={formData.photo}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            {/* Bio */}
            <div className="sm:col-span-2">
              <label
                htmlFor="bio"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Biografi Singkat
              </label>
              <textarea
                id="bio"
                name="bio"
                rows="5"
                placeholder="Tuliskan bio singkat author"
                value={formData.bio}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none 
              focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
              dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              Simpan Perubahan
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/authors")}
              className="text-gray-600 hover:text-white border border-gray-600 hover:bg-gray-600 
              focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm 
              px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-400 dark:hover:text-white 
              dark:hover:bg-gray-500 dark:focus:ring-gray-800"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

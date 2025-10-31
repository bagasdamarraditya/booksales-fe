import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGenres } from "../../../../_services/genres";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genresData = await getGenres();
        setGenres(genresData);
      } catch (error) {
        console.error("Gagal mengambil data genres:", error);
      }
    };
    fetchData();
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 
          md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 
                      1110.89 3.476l4.817 4.817a1 1 0 
                      01-1.414 1.414l-4.816-4.816A6 6 
                      0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 
                    dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Search genre..."
                />
              </div>
            </form>
          </div>

          <div className="w-full md:w-auto flex items-center justify-end">
            <button
              type="button"
              onClick={() => navigate("/admin/genres/create")}
              className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 
                focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 
                dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              <svg
                className="h-3.5 w-3.5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 
                  110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 
                  0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Add Genre
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Genre Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {genres.map((genre) => (
                <tr key={genre.id} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                    {genre.name}
                  </td>
                  <td className="px-4 py-3">{genre.description || "-"}</td>
                  <td className="px-4 py-3 text-right relative">
                    <button
                      onClick={() => toggleDropdown(genre.id)}
                      className="inline-flex items-center p-0.5 text-sm font-medium text-gray-500 
                        hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 
                        dark:hover:text-gray-100"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 
                        0 014 0zM12 10a2 2 0 11-4 0 2 
                        2 0 014 0zM16 12a2 2 0 100-4 
                        2 2 0 000 4z" />
                      </svg>
                    </button>

                    {openDropdownId === genre.id && (
                      <div className="absolute right-0 mt-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 
                        shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <a
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 
                              dark:hover:text-white"
                            >
                              Edit
                            </a>
                          </li>
                        </ul>
                        <div className="py-1">
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                              dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

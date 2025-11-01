import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/public/index.jsx";
import Books from "./assets/pages/public/books/index.jsx";
import PublicLayout from "./assets/layouts/public.jsx";
import Login from "./assets/pages/auth/login.jsx";
import Register from "./assets/pages/auth/register.jsx";
import AdminLayout from "./assets/layouts/admin.jsx";
import Dashboard from "./assets/pages/admin/index.jsx";

// Books
import AdminBooks from "./assets/pages/admin/books/index.jsx";
import BookCreate from "./assets/pages/admin/books/create.jsx";

// Authors
import AdminAuthors from "./assets/pages/admin/authors/index.jsx";
import AuthorCreate from "./assets/pages/admin/authors/create.jsx";
import AuthorEdit from "./assets/pages/admin/authors/edit.jsx"; // ✅ Tambah

// Genres
import AdminGenres from "./assets/pages/admin/genres/index.jsx";
import GenreCreate from "./assets/pages/admin/genres/create.jsx";
import GenreEdit from "./assets/pages/admin/genres/edit.jsx"; // ✅ Tambah

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout umum untuk halaman public */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
        </Route>

        {/* Layout umum untuk halaman auth */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Layout umum untuk halaman admin */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          {/* Books */}
          <Route path="books">
            <Route index element={<AdminBooks />} />
            <Route path="create" element={<BookCreate />} />
          </Route>

          {/* Authors */}
          <Route path="authors">
            <Route index element={<AdminAuthors />} />
            <Route path="create" element={<AuthorCreate />} />
            <Route path="edit/:id" element={<AuthorEdit />} /> {/* ✅ Route Edit */}
          </Route>

          {/* Genres */}
          <Route path="genres">
            <Route index element={<AdminGenres />} />
            <Route path="create" element={<GenreCreate />} />
            <Route path="edit/:id" element={<GenreEdit />} /> {/* ✅ Route Edit */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

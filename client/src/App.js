import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";
import UserPage from "./layout/UserPage";
import BlogsPage from "./layout/BlogsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<UserPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
        <Route path="/blog" element={<BlogsPage />} />
      </Routes>
    </>
  );
}

export default App;

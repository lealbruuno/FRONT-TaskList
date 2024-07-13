import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Edit } from "../pages/Edit";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

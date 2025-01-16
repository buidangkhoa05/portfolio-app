import App from "@/App";
import AboutMePage from "@/pages/about-me-page";
import HomePage from "@/pages/home-page";
import { BrowserRouter, Route, Routes } from "react-router";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;

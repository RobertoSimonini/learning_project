import { Routes, BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./components/shared/NavBar";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { VideoGameDetails } from "./pages/VideoGameDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="home_page" element={<HomePage />} />
          <Route path="contact_page" element={<ContactPage />} />
          <Route path="/details/:id" element={<VideoGameDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

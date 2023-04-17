import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import JoinUs from "./pages/JoinUs/JoinUs";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<JoinUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;

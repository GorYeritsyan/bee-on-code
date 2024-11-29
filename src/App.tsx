import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/shared/Layout";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Route>
     </Routes>
    </>
  );
};

export default App;

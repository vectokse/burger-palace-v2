import { Route, Routes } from "react-router";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import OrderPage from "./components/pages/OrderPage/OrderPage";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

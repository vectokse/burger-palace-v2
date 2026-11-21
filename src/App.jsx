import { Route, Routes } from "react-router";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import OrderPage from "./components/pages/OrderPage/OrderPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;

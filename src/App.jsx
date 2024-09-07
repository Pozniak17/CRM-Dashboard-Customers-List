import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SideBar from "./components/Sidebar/SideBar/SideBar.jsx";
import { Layout } from "./App.module";

const Customers = lazy(() => import("./pages/Customers/Customers.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <Layout>
      <SideBar />
      <Routes>
        {/* перенаправлення з / на адресу "/customers" */}
        <Route path="/" element={<Navigate to="/customers" />} />
        <Route path="/product" element={<div>Product</div>} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/income" element={<div>Income</div>} />
        <Route path="/promote" element={<div>Promote</div>} />
        <Route path="/help" element={<div>Help</div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

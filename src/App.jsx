import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar/SideBar.jsx";
import { Layout } from "./App.module";
import { lazy } from "react";

const Customers = lazy(() => import("./pages/Customers/Customers"));

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
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;

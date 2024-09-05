import { Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar/Sidebar";
import { Layout } from "./App.module";
import Customers from "./pages/Customers/Customers";

function App() {
  return (
    <Layout>
      <SideBar />
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
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

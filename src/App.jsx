import { Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar/Sidebar";

function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/product" element={<div>Product</div>} />
        <Route path="/customers" element={<div>Customers</div>} />
        <Route path="/income" element={<div>Income</div>} />
        <Route path="/promote" element={<div>Promote</div>} />
        <Route path="/help" element={<div>Help</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;

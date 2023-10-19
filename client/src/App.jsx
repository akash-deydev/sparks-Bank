import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Customers from "./pages/Customers";
import CustomerDetail from "./pages/CustomerDetail";
import Login from "./pages/Login";
import AllTransfers from "./pages/AllTransfers";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-customers" element={<Customers />} />
        <Route path="/customer-details/:id" element={<CustomerDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-transfers" element={<AllTransfers />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

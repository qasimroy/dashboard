import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Complaint from "./pages/Complaint";
import Drivers from "./pages/Drivers";
import Signature from "./pages/Signature";
import Documents from "./pages/Documents";
import Schedule from "./pages/Schedule";
import Reciept from "./pages/Reciept";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/complaint" element={<Complaint />} />
                    <Route path="/drivers" element={<Drivers />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/reciept" element={<Reciept />} />
                    <Route path="/e-signature" element={<Signature />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/settings" element={<Setting />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

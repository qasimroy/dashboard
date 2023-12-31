import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Dashboard,
    Complaint,
    Drivers,
    Signature,
    Documents,
    Schedule,
    Reciept,
    Setting,
    Login,
    Error,
    Layout,
} from "./pages";

export function App() {
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

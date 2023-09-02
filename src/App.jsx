import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="flex">
            <Layout>
                <Dashboard />
            </Layout>
        </div>
    );
}

export default App;

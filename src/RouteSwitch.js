import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Profile from "./Profile";


const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/test" element={<h1>Hello from test</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch

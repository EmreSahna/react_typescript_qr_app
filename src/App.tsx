import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import BuyerLogin from "./pages/BuyerLogin";
import SellerLogin from "./pages/SellerLogin";

const App = () => {
    return (
        <Routes>
            <Route path="/seller/login" element={<SellerLogin />} />
            <Route path="/buyer/login" element={<BuyerLogin />} />
            <Route path="/" element={<Layout/>} >
                <Route path="home" element={<h1>Home</h1>} />
                <Route path="about" element={<h1>About</h1>} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    );
};

export default App;
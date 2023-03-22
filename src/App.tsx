import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout';
import BuyerDashboard from './pages/BuyerDashboard';
import BuyerLogin from './pages/BuyerLogin';
import Checkout from './pages/Checkout';
import Market from './pages/Market';
import Pay from './pages/Pay';
import SellerLogin from './pages/SellerLogin';

function App() {
  return (
    <Routes>
      <Route path="/seller/login" element={<SellerLogin />} />
      <Route path="/buyer/login" element={<BuyerLogin />} />
      <Route path="/" element={<Layout/>} >
          <Route path="buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="home" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="market" element={<Market />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="pay" element={<Pay />} />
      </Route>
    </Routes>
  )
}

export default App;
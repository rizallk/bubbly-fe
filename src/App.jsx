import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './assets/scss/main.scss';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ScrollToTop from './components/ScrollToTop';
import Products from './pages/Products';
import Shops from './pages/Shops';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categorySlug" element={<Products />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/shops" element={<Dashboard />} />
        <Route path="/dashboard/shop/add" element={<Dashboard />} />
        <Route path="/dashboard/shop/products" element={<Dashboard />} />
        <Route path="/dashboard/product/add" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Dashboard />} />
      </Routes>
      <ScrollToTop />
    </HelmetProvider>
  );
}

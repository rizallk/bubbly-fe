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
import ShopList from './pages/ShopList';
import ShopDetail from './pages/ShopDetail/Layout';
import AddShop from './pages/AddShop';
import AboutUs from './pages/AboutUs';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import EditShop from './pages/EditShop';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

export default function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categorySlug" element={<Products />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/:isSignup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/shops" element={<ShopList />} />
        <Route path="/dashboard/shop/add" element={<AddShop />} />
        <Route path="/dashboard/shop/detail" element={<ShopDetail />} />
        <Route path="/dashboard/shop/edit" element={<EditShop />} />
        <Route path="/dashboard/products" element={<ProductList />} />
        <Route path="/dashboard/product/add" element={<AddProduct />} />
        <Route path="/dashboard/product/detail" element={<ProductDetail />} />
        <Route path="/dashboard/product/edit" element={<EditProduct />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Routes>
      <ScrollToTop />
    </HelmetProvider>
  );
}

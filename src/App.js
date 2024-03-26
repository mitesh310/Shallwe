import './App.css';

import { lazy, Suspense } from 'react';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// const Navbar = lazy(() => import('./components/navbar'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/footer'));
const Loader = lazy(() => import('./components/loader'));


const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Account = lazy(() => import('./pages/Account'));
const Home = lazy(() => import('./pages/Home/home'));
const ContactUs = lazy(() => import('./pages/contactus'));
const AboutUs = lazy(() => import('./pages/about'));
const Products = lazy(() => import('./pages/products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const ShippingDetails = lazy(() => import('./pages/shippingDetails'));
const Confirmorder = lazy(() => import('./pages/Confirmorder'));
const Marquee = lazy(() => import('./pages/Home/Marquee'));
const Myorder = lazy(() => import('./pages/Myorder'));
const Payment = lazy(() => import('./pages/Payment'));

function App() {
  return (
    <div className="App">
      <Router>
        <Marquee />
        <Header />
        {/* <Navbar /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/products' element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path='/shippingdetails' element={<ShippingDetails />} />
            <Route path='/Confirmorder' element={<Confirmorder />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/account' element={<Account />} />
            <Route path='/myorder' element={<Myorder />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>

    </div>
  );
}

export default App;

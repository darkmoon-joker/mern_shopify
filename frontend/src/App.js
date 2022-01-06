import React from "react"
import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductInfo from "./pages/ProductInfo"
import CartPage from "./pages/CartPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage"
import ShippingPage from "./pages/ShippingPage"
import PaymentPage from "./pages/PaymentPage"
import PlaceOrderPage from "./pages/PlaceOrderPage"
import OrderPage from "./pages/OrderPage"

function App() {

  return (
    <React.Fragment>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Container>
          <Routes>
            <Route path="/login" element={<LoginPage />} exact />
            <Route path="/shipping" element={<ShippingPage />} exact />
            <Route path="/placeorder" element={<PlaceOrderPage />} exact />
            <Route path="/payment" element={<PaymentPage />} exact />
            <Route path="/order/:id" element={<OrderPage />} exact />
            <Route path="/profile" element={<ProfilePage />} exact />
            <Route path="/register" element={<RegisterPage />}  />
            <Route path="/product/:id" element={<ProductInfo />} exact />
            <Route path="/cart">
            <Route path=":id" element={<CartPage />} />
             <Route path="" element={<CartPage />} />
            </Route>
            <Route path="/" element={<HomePage />} exact />
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

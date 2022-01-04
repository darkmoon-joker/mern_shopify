import React from "react"
import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductInfo from "./pages/ProductInfo"
import CartPage from "./pages/CartPage"

function App() {

  return (
    <React.Fragment>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/product/:id" element={<ProductInfo />} exact />
            <Route path="/cart">
            <Route path=":id" element={<CartPage />} />
             <Route path="" element={<CartPage />} />
            </Route>
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

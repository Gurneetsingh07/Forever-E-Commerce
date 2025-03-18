import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import {Toaster} from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfrimationPage from "./pages/OrderConfrimationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyordersPage from "./pages/MyordersPage";
const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/*User layout*/}
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="collections/:collection" element={<CollectionPage/>}/>
          <Route path="product/:id" element={<ProductDetails/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="order-confirmation" element={<OrderConfrimationPage/>}/>
          <Route path="order/:id" element={<OrderDetailsPage/>}/>
          <Route path="my-orders" element={<MyordersPage/>}/>
          
        </Route>
        <Route>{/*admin layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

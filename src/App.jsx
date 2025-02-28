import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/*User layout*/}
          <Route index element={<Home/>}/>
        </Route>
        <Route>{/*admin layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

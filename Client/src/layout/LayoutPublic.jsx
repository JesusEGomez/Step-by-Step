import React, { useEffect } from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { updateState } from "../features/cartSlice";

import { Outlet, useLocation } from "react-router-dom";

export default function LayoutPublic() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateState());
  }, []);
  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <main>
        <Outlet />
      </main>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

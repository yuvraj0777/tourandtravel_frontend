import React, { useEffect, useState } from "react";
import { Header, Footer } from "./components/index";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [isFirstUser, setIsFirstUser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setIsFirstUser(true);
      navigate("/publicSetion");
    } else {
      setIsFirstUser(false);
    }
  }, [navigate]);

  return (
    <>
      <Header isFirstUser={isFirstUser} />
      {isFirstUser ? (
        <Outlet />
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;

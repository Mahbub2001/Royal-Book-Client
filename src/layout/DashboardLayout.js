import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUserRole } from "../api/user";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../hook/useTitle";
import SideBar from "../pages/DashBoard/SideBar";

const DashboardLayout = () => {
  useTitle("Dashboard")
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUserRole(user?.email).then((data) => {
      // console.log(data)
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  return (
    <div className="md:flex relative min-h-screen">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <SideBar role={role} />
          <div className="flex-1">
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;

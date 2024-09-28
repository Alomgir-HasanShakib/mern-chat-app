import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {loading ? (
        <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin"></div>
      ) : (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      )}
    </div>
  );
};

export default LogoutButton;

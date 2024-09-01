import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="text-2xl font-medium bg-red-500 text-white">
        {" "}
        this is a navbar
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;

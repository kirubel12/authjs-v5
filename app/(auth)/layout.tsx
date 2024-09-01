import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full flex items-center justify-center bg-[#ffbb5e] text-xl">
      {children}
    </div>
  );
};

export default AuthLayout;

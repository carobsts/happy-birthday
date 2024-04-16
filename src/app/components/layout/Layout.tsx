"use client";
import { FC, ReactNode, useState } from "react";
import { Balloons } from ".";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div style={{ zIndex: -1 }} className="h-full">
      <Balloons />
      {children}
    </div>
  );
};

export default Layout;

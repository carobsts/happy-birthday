import { FC, ReactNode } from "react";
import { Balloons } from ".";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <div>
        <Balloons />
        {children}
      </div>
    </>
  );
};

export default Layout;

import { FC, ReactNode } from 'react';
import Navbar from "./Navbar";

type layoutProps = {
  children: ReactNode;
}

const Layout:FC<layoutProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
// components/Layout.tsx
import { ReactNode } from 'react';
import { GlobalStyles } from '../Styles/GlobalStyles';

interface LayoutProps {
  children: ReactNode; // Define the type for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;

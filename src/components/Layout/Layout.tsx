import React from 'react';

interface Props {
  children: React.ReactNode;
}

// Wraps page content to add responsive padding
export const Layout: React.FC<Props> = ({ children }) => (
  <div className="px-2 pt-4 pb-8 xs:px-4 lg:py-8 max-w-6xl m-auto">
    {children}
  </div>
);

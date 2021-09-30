import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <div className="p-2 max-w-4xl m-auto">{children}</div>
);

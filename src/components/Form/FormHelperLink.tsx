import React from 'react';
import { Link, To } from 'react-router-dom';

type FormHelperLinkProps = {
  to: To;
  children: React.ReactNode;
};

export default function FormHelperLink({ to, children }: FormHelperLinkProps) {
  return (
    <Link
      to={to}
      className="font-medium text-primary-600 dark:text-primary-500 hover:underline pl-1"
    >
      {children}
    </Link>
  );
}

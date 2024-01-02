import React from 'react';

import { RerenderProvider } from './Context';

type RerenderProps = {
  children: React.ReactNode;
};

export default function Rerender({ children }: RerenderProps) {
  return <RerenderProvider>{children}</RerenderProvider>;
}

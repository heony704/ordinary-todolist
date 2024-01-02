import React, { createContext, useContext, useMemo, useState } from 'react';

type RerenderState = {
  rerenderFlag: boolean;
  rerender: () => void;
};

const RerenderContext = createContext<RerenderState | null>(null);

type RerenderProviderProps = {
  children: React.ReactNode;
};

export function RerenderProvider({ children }: RerenderProviderProps) {
  const [rerenderFlag, setRerenderFlag] = useState(false);
  const rerender = () => {
    setRerenderFlag(prevRerenderFlag => !prevRerenderFlag);
  };

  const memoizedValue = useMemo(
    () => ({ rerenderFlag, rerender }),
    [rerenderFlag, rerender],
  );

  return (
    <RerenderContext.Provider value={memoizedValue}>
      {children}
    </RerenderContext.Provider>
  );
}

export const useRerender = () => {
  const rerenderContext = useContext(RerenderContext);
  if (rerenderContext === null)
    throw new Error('Rerender 컴포넌트의 하위 컴포넌트에서 사용해 주세요.');
  return rerenderContext;
};

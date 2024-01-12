import React, { Children, cloneElement, useState } from 'react';

type FormItemProps = {
  name: string;
  children: React.ReactNode;
};

export default function FormItem({ name, children }: FormItemProps) {
  // FormItem이 유효하지 않음을 UI로 표시할 타이밍을 상태로 관리
  const [errorDisplayFlag, setErrorDisplayFlag] = useState(false);
  const displayError = () => {
    setErrorDisplayFlag(true);
  };

  // FormItem의 이름, 유효 UI 상태를 FormItem 하위 컴포넌트로 전달
  return (
    <div className="space-y-1 pb-2">
      {Children.map(children, child =>
        cloneElement(child as React.ReactElement<any>, {
          name,
          errorDisplayFlag,
          displayError,
        }),
      )}
    </div>
  );
}

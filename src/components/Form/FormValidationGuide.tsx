import React from 'react';

import { useFormValids } from './Context';

type FormValidationGuideProps = {
  name?: string;
  errorDisplayFlag?: boolean;
  children: React.ReactNode;
};

export default function FormValidationGuide({
  name = undefined,
  errorDisplayFlag = false,
  children,
}: FormValidationGuideProps) {
  if (name === undefined)
    throw new Error(
      'Form ValidationGuide는 Form Item의 바로 하위 컴포넌트로 위치해야 합니다.',
    );

  const { valids } = useFormValids();
  const isValid = valids[name] ?? true;
  const isError = errorDisplayFlag === true && isValid === false;

  if (isError === false) return null;

  return (
    <div className="absolute">
      <p className="relative text-sm text-red-500">{children}</p>
    </div>
  );
}

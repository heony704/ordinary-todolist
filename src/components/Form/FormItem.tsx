import React, { Children, cloneElement } from 'react';

type FormItemProps = {
  name: string;
  children: React.ReactNode;
};

export default function FormItem({ name, children }: FormItemProps) {
  return (
    <div className="space-y-1 pb-2">
      {Children.map(children, child =>
        cloneElement(child as React.ReactElement<any>, { name }),
      )}
    </div>
  );
}

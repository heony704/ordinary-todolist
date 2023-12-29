import React from 'react';

type CenteredLayoutProps = {
  children: React.ReactNode;
};

export default function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
      <header>
        <h1 className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white select-none">
          Todolist
        </h1>
      </header>
      <main className="w-full">
        <div className="flex w-full justify-center">{children}</div>
      </main>
    </div>
  );
}

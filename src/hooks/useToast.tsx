import React, { useState } from 'react';

import Toast from 'src/components/Toast';

export default function useToast(): [
  () => JSX.Element,
  (text: string) => void,
] {
  const [toastContents, setToastContents] = useState('');
  const [toastMode, setToastMode] = useState(false);

  const showToast = (text: string) => {
    setToastContents(text);
    setToastMode(true);
  };

  const hideToast = () => {
    setToastMode(false);
  };

  function ToastContainer() {
    return (
      <div>
        {toastMode && <Toast text={toastContents} onClose={hideToast} />}
      </div>
    );
  }

  return [ToastContainer, showToast];
}

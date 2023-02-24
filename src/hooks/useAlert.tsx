import React, { useState } from 'react';
import Alert from 'src/components/Alert';

export default function useAlert(): [
  () => JSX.Element,
  (title: string, contents: string) => void,
] {
  const [alertMode, setAlertMode] = useState(false);

  const closeAlert = () => {
    setAlertMode(false);
  };

  const [alertTitle, setAlertTitle] = useState('');
  const [alertContents, setAlertContents] = useState('');

  const showAlert = (title: string, contents: string) => {
    setAlertTitle(title);
    setAlertContents(contents);
    setAlertMode(true);
  };

  function AlertContainer() {
    return (
      <div>
        {alertMode && (
          <Alert
            title={alertTitle}
            contents={alertContents}
            onConfirm={closeAlert}
          />
        )}
      </div>
    );
  }

  return [AlertContainer, showAlert];
}

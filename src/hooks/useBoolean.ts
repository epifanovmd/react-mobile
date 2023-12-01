import { useCallback, useState } from 'react';

type Boolean = [boolean, () => void, () => void];

export const useBoolean = (): Boolean => {
  const [loading, setBoolean] = useState(false);

  const setTrue = useCallback(() => {
    setBoolean(true);
  }, []);

  const setFalse = useCallback(() => {
    setBoolean(false);
  }, []);

  return [loading, setTrue, setFalse];
};

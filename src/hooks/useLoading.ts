import { useCallback, useState } from 'react';

type Loading = [boolean, () => void, () => void];

export const useLoading = (): Loading => {
  const [loading, setLoading] = useState(false);

  const start = useCallback(() => {
    setLoading(true);
  }, []);

  const stop = useCallback(() => {
    setLoading(false);
  }, []);

  return [loading, start, stop];
};

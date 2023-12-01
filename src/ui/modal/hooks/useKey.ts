import * as React from 'react';
import { genId } from '@force-dev/utils';

interface IUseKey {
  generateKey(): string;

  removeKey(key: string): void;
}

// Generates a random key
const keyGenerator = (): string => `modal-port_${genId()}`;

// Custom hook that checks for uniqueness and retries if clashes
export const useKey = (): IUseKey => {
  const usedKeys = React.useRef<string[]>([]);

  const generateKey = (): string => {
    let foundUniqueKey = false;
    let newKey = '';
    let tries = 0;

    while (!foundUniqueKey && tries < 3) {
      // limit number of tries to stop endless loop of pain
      tries++;
      newKey = keyGenerator();

      if (!usedKeys.current.includes(newKey)) {
        foundUniqueKey = true;
      }
    }

    // will only run if exited while loop without finding a unique key
    if (!foundUniqueKey) {
      newKey = `modal-port_${genId()}`; // fallback method
    }

    usedKeys.current.push(newKey);

    return newKey;
  };

  // Removes our key to make it 'available' again
  const removeKey = (key: string): void => {
    usedKeys.current = usedKeys.current.filter(k => k !== key);
  };

  return { generateKey, removeKey };
};

import { StyleProp } from 'react-native';

export const resolveStyleProp = <T extends any = any>(
  style: StyleProp<T>,
): T => {
  if (Array.isArray(style)) {
    return style.reduce<{}>((acc, item) => {
      if (item) {
        return Object.assign(acc, resolveStyleProp<typeof item>(item));
      }

      return acc;
    }, {}) as T;
  } else {
    return style as T;
  }
};

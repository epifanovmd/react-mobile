import * as React from 'react';

import type { Mask } from './formatWithMask';
import { formatWithMask } from './formatWithMask';

export type UseMaskedInputProps = {
  value?: string;
  placeholder?: string;
  mask?: Mask;
  onChangeText?(masked: string, unmasked: string): void;
  placeholderFillCharacter?: string;
  selection?: { start: number; end?: number | undefined } | undefined;
};

export const useMaskedInput = (props: UseMaskedInputProps) => {
  const {
    value,
    mask,
    onChangeText,
    placeholderFillCharacter = '_',
    selection,
  } = props;

  const maskArray = React.useMemo(
    () => (typeof mask === 'function' ? mask(value) : mask),
    [mask, value],
  );

  const formattedValueResult = React.useMemo(() => {
    return formatWithMask({ text: value || '', mask });
  }, [mask, value]);

  const handleChangeText = React.useCallback(
    (text: string) => {
      if (mask && text.length > mask.length) {
        return;
      }

      const result = formatWithMask({
        text: text,
        mask,
      });

      onChangeText && onChangeText(result.masked, result.unmasked);
    },
    [mask, onChangeText],
  );

  const defaultPlaceholder = React.useMemo(() => {
    if (maskArray) {
      return maskArray
        .map(maskChar => {
          if (typeof maskChar === 'string') {
            return maskChar;
          } else {
            return placeholderFillCharacter;
          }
        })
        .join('');
    } else {
      return undefined;
    }
  }, [maskArray, placeholderFillCharacter]);

  const inputValue = formattedValueResult.masked;

  return {
    onChangeText: handleChangeText,
    value: inputValue,
    selection,
    placeholder: defaultPlaceholder,
  };
};

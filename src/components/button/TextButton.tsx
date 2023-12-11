import React, { FC, memo } from 'react';
import { Button, ButtonProps } from './Button';

interface TextButtonProps extends ButtonProps {}

export const TextButton: FC<TextButtonProps> = memo(
  ({ color = '#000', ...rest }) => {
    return (
      <Button
        borderColor={'transparent'}
        bg={'transparent'}
        borderWidth={0}
        color={color}
        {...rest}
      />
    );
  },
);

import React, { FC, memo } from 'react';
import { Button, ButtonProps } from './Button';

interface BorderButtonProps extends ButtonProps {}

export const BorderButton: FC<BorderButtonProps> = memo(
  ({ color = '#000', ...rest }) => {
    return (
      <Button borderWidth={2} bg={'transparent'} color={color} {...rest} />
    );
  },
);

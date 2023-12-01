import React, { FC, memo, useMemo } from 'react';
import { Button, ButtonProps } from './Button';

interface BorderButtonProps extends ButtonProps {}

export const BorderButton: FC<BorderButtonProps> = memo(
  ({ color, ...rest }) => {
    const defaultProps = useMemo(
      () => ({
        borderColor: rest.disabled ? 'rgb(73, 100, 169)' : '#1c3e94',
        borderWidth: 2,
        bg: 'transparent',
        color: color ? color : '#1c3e94',
      }),
      [color, rest.disabled],
    );

    return <Button {...defaultProps} {...rest} />;
  },
);

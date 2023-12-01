import React, { FC, memo, useMemo } from "react";
import { Button, ButtonProps } from "./Button";

interface TextButtonProps extends ButtonProps {}

export const TextButton: FC<TextButtonProps> = memo(({ color, ...rest }) => {
  const defaultProps = useMemo(
    () => ({
      borderColor: "transparent",
      borderWidth: 0,
      bg: "transparent",
      color: color ? color : "#1c3e94",
    }),
    [color],
  );

  return <Button {...defaultProps} {...rest} />;
});

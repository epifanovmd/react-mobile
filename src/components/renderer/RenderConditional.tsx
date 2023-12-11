import React, { FC } from 'react';

export interface RenderConditionalProps {
  if: boolean | string | number | undefined;
  children: React.JSX.Element | null;
}

export const RenderConditional: FC<RenderConditionalProps> = ({
  if: _if,
  children,
}) => {
  return _if ? children || null : null;
};

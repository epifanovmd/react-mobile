import React, { FC } from 'react';

export interface RenderConditionalProps {
  if: boolean;
  children: React.JSX.Element;
}

export const RenderConditional: FC<RenderConditionalProps> = ({
  if: _if,
  children,
}) => {
  return _if ? children || null : null;
};

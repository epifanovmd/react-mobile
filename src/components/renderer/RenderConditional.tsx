import React, { FC } from "react";

export interface RenderConditionalProps {
  if: boolean | string | number | undefined;
  children: React.JSX.Element | null;
}

export const RenderConditional: FC<RenderConditionalProps> = props => {
  return props.if ? props.children || null : null;
};

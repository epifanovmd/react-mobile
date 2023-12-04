import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BrushIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.71 4.63006L19.37 3.29006C19 2.90006 18.35 2.90006 17.96 3.29006L9 12.2501L11.75 15.0001L20.71 6.04006C21.1 5.65006 21.1 5.00006 20.71 4.63006ZM7 14.0001C6.20435 14.0001 5.44129 14.3161 4.87868 14.8787C4.31607 15.4413 4 16.2044 4 17.0001C4 18.3101 2.84 19.0001 2 19.0001C2.92 20.2201 4.5 21.0001 6 21.0001C7.06087 21.0001 8.07828 20.5786 8.82843 19.8285C9.57857 19.0783 10 18.0609 10 17.0001C10 16.2044 9.68393 15.4413 9.12132 14.8787C8.55871 14.3161 7.79565 14.0001 7 14.0001Z" />
    </Svg>
  );
};

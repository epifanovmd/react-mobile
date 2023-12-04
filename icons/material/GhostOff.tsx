import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GhostOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 3.27L3.28 2L22 20.72L20.73 22L17.87 19.13L15 22L12 19L9 22L6 19L3 22V11C3 9.09 3.59 7.33 4.6 5.87L2 3.27ZM12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11V17.18L15.7 11.88C16.46 11.59 17 10.86 17 10C17 9.46957 16.7893 8.96086 16.4142 8.58579C16.0391 8.21071 15.5304 8 15 8C14.14 8 13.41 8.54 13.13 9.3L7.2 3.38C8.59 2.5 10.24 2 12 2ZM7 10C7 10.5304 7.21071 11.0391 7.58579 11.4142C7.96086 11.7893 8.46957 12 9 12C9.5 12 9.93 11.83 10.27 11.54L7.46 8.73C7.17 9.07 7 9.5 7 10Z" />
    </Svg>
  );
};

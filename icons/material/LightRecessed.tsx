import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LightRecessedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 7C6.5 7 2 9.46 2 12.5C2 15.54 6.5 18 12 18C17.5 18 22 15.54 22 12.5C22 9.46 17.5 7 12 7ZM16.5 10C16.5 10.4 14.9 11.54 12 11.54C9.1 11.54 7.5 10.4 7.5 10C7.5 9.91 7.65 9.74 7.9 9.55C9.06 9.21 10.44 9 12 9C13.56 9 14.94 9.21 16.1 9.55C16.35 9.74 16.5 9.91 16.5 10ZM12 16C7.12 16 4 13.93 4 12.5C4 11.81 4.73 11 6.03 10.29C6.3 11.83 8.87 13.04 12 13.04C15.13 13.04 17.7 11.83 17.97 10.29C19.27 11 20 11.81 20 12.5C20 13.93 16.88 16 12 16Z" />
    </Svg>
  );
};

import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MirrorRectangleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.29 10.28L11.53 7.03L12.59 8.09L9.35 11.34L8.29 10.28ZM8.7 14.61L14.36 8.95L15.42 10L9.76 15.67L8.7 14.61ZM18 3V21H6V3H18ZM20 1H4V23H20V1Z" />
    </Svg>
  );
};

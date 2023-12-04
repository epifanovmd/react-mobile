import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GreenhouseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L4 9V21H20V9L12 3ZM10 10H14V19H10V10ZM16 10H18V13H16V10ZM15.33 8H8.67L12 5.5L15.33 8ZM8 10V13H6V10H8ZM6 15H8V19H6V15ZM16 19V15H18V19H16Z" />
    </Svg>
  );
};

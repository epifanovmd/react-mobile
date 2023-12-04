import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GarageIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 20H17V11H7V20H5V9L12 5L19 9V20ZM8 12H16V14H8V12ZM8 15H16V17H8V15ZM16 18V20H8V18H16Z" />
    </Svg>
  );
};

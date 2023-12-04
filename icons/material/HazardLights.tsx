import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HazardLightsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 12L14.33 16H9.68L12 12ZM12 8L6.21 18H17.8L12 8ZM12 2L1 21H23L12 2ZM12 6L19.53 19H4.47L12 6Z" />
    </Svg>
  );
};

import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PulseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 12.9991H5.79L10.1 4.78906L11.28 13.7491L14.5 9.65906L17.83 12.9991H21V14.9991H17L14.67 12.6691L9.92 18.7291L8.94 11.3091L7 14.9991H3V12.9991Z" />
    </Svg>
  );
};

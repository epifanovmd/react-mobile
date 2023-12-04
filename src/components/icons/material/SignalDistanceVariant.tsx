import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SignalDistanceVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 6V4C7.1826 4 10.2348 5.26428 12.4853 7.51472C14.7357 9.76515 16 12.8174 16 16H14C14 14.6868 13.7413 13.3864 13.2388 12.1732C12.7362 10.9599 11.9997 9.85752 11.0711 8.92893C10.1425 8.00035 9.04009 7.26375 7.82683 6.7612C6.61358 6.25866 5.31322 6 4 6ZM4 10V8C6.12173 8 8.15656 8.84285 9.65685 10.3431C11.1571 11.8434 12 13.8783 12 16H10C10 14.4087 9.36786 12.8826 8.24264 11.7574C7.11742 10.6321 5.5913 10 4 10ZM4 12C5.06087 12 6.07828 12.4214 6.82843 13.1716C7.57857 13.9217 8 14.9391 8 16H4V12ZM3 18H19V16L22 19L19 22V20H3V18Z" />
    </Svg>
  );
};

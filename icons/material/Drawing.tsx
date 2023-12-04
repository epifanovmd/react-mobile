import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DrawingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.5 3C9.95869 3 11.3576 3.57946 12.3891 4.61091C13.4205 5.64236 14 7.04131 14 8.5C14 9.83 13.53 11.05 12.74 12H21V21H12V12.74C11.05 13.53 9.83 14 8.5 14C7.04131 14 5.64236 13.4205 4.61091 12.3891C3.57946 11.3576 3 9.95869 3 8.5C3 7.04131 3.57946 5.64236 4.61091 4.61091C5.64236 3.57946 7.04131 3 8.5 3Z" />
    </Svg>
  );
};

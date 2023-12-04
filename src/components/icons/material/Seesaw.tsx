import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SeesawIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.68 13.2594L22.04 15.2294L2.35 18.7694L2 16.7994L4.95 16.2694L4.6 14.2994C4.5 13.7594 4.86 13.2394 5.41 13.1394C5.95 13.0394 6.47 13.3994 6.57 13.9494L6.92 15.9094L16.76 14.1494L16.41 12.1794C16.31 11.6294 16.67 11.1094 17.22 10.9994C17.76 10.9194 18.28 11.2794 18.38 11.8194L18.73 13.7894L21.68 13.2594ZM10.06 18.3994L8 21.9994H16L13.58 17.7694L10.06 18.3994Z" />
    </Svg>
  );
};

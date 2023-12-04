import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CheckAllIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M0.410034 13.4101L6.00003 19.0001L7.41003 17.5801L1.83003 12.0001L0.410034 13.4101ZM22.24 5.58008L11.66 16.1701L7.50003 12.0001L6.07003 13.4101L11.66 19.0001L23.66 7.00008L22.24 5.58008ZM18 7.00008L16.59 5.58008L10.24 11.9301L11.66 13.3401L18 7.00008Z" />
    </Svg>
  );
};

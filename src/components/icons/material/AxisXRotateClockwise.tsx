import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AxisXRotateClockwiseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.0001 10H14.9101C14.5701 6.55 13.4001 4 12.0001 4C10.4201 4 9.12006 7.27 9.00006 11.42L7.00006 12.57V12C7.00006 6.5 9.24006 2 12.0001 2C14.4201 2 16.4401 5.44 16.9001 10H20.0001L16.0001 14L12.0001 10ZM12.0001 22C10.1201 22 8.47006 19.92 7.62006 16.84L9.37006 15.83C9.87006 18.31 10.8601 20 12.0001 20C13.2701 20 14.3601 17.89 14.7901 14.92L16.0001 16.12L16.7001 15.42C16.0001 19.26 14.1601 22 12.0001 22ZM2.11006 18.87L1.11006 17.13L1.06006 17.06L11.1201 11.25L12.7201 12.84L2.15006 18.94L2.11006 18.87ZM21.8901 5.13L22.8901 6.87L19.2001 9H17.7701L17.5001 7.66L21.8901 5.13Z" />
    </Svg>
  );
};

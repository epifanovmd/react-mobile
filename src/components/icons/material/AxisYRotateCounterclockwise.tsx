import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AxisYRotateCounterclockwiseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.0001 14H14.9101C14.5701 17.45 13.4001 20 12.0001 20C10.4201 20 9.12006 16.73 9.00006 12.58L7.00006 11.43V12C7.00006 17.5 9.24006 22 12.0001 22C14.4201 22 16.4401 18.56 16.9001 14H20.0001L16.0001 10L12.0001 14ZM12.0001 2C10.1201 2 8.47006 4.08 7.62006 7.16L9.37006 8.17C9.87006 5.69 10.8601 4 12.0001 4C13.2701 4 14.3601 6.11 14.7901 9.08L16.0001 7.88L16.7001 8.58C16.0001 4.74 14.1601 2 12.0001 2ZM2.11006 5.13L1.11006 6.87L1.06006 6.94L11.1201 12.75L12.7201 11.16L2.15006 5.06L2.11006 5.13ZM21.8901 18.87L22.8901 17.13L19.2001 15H17.7701L17.5001 16.34L21.8901 18.87Z" />
    </Svg>
  );
};

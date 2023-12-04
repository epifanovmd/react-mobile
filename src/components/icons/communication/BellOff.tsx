import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BellOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M9 17V18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18V17M9 17L15 17M9 17L5.00022 17.0002C4.48738 17.0002 4.06449 16.6141 4.00673 16.1168L4 15.9998V15.4141C4 15.1489 4.10544 14.8949 4.29297 14.7073L4.80371 14.1963C4.92939 14.0706 5 13.9003 5 13.7225V9.99986C5 8.15821 5.7112 6.48267 6.87393 5.23291M15 17L18.9999 17M5 3L21 19M18.9995 12.999L19.0004 10C19.0004 6.13402 15.8665 3 12.0005 3L11.7598 3.00406C10.9548 3.03125 10.1845 3.19404 9.4707 3.47081"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
